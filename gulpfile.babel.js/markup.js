import { src, dest, lastRun } from 'gulp'
import nunjucks from 'gulp-nunjucks'
import htmlmin from 'gulp-htmlmin'
import rename from 'gulp-rename'
import gulpIf from 'gulp-if'
import data from 'gulp-data'
import size from 'gulp-size'
import path from 'path'
import fs from 'fs'
// import debug from 'gulp-debug'

import { requireNoCache } from './utils'
import config from './config'

const _getPageData = data(file => {
  let pageData
  let revManifest = `../${config.paths.base.dest}/rev-manifest`
  let dataFile = `${config.paths.base.src}/data/${
    path.parse(file.path).name
  }.js`

  if (fs.existsSync(dataFile)) {
    pageData = requireNoCache(`../${dataFile}`).default
  } else {
    pageData = requireNoCache(`../${config.paths.base.src}/data/default.js`)
      .default
  }

  pageData = {
    config: {
      ...config
    },
    ...pageData
  }

  if (fs.existsSync(revManifest)) {
    return {
      ...pageData,
      ...requireNoCache(revManifest)
    }
  }

  return pageData
})

const _makePageRoute = rename(file => {
  if (file.basename !== 'index') {
    file.dirname = file.basename
    file.basename = 'index'
  }
})

/**
 * Scan your HTML for assets & optimize them
 */
function markup() {
  return src(config.paths.markup.src, {
    debug: config.debug,
    since: lastRun(markup)
  })
    .pipe(_getPageData)
    .pipe(nunjucks.compile())
    .pipe(_makePageRoute)
    .pipe(
      gulpIf(
        config.isProduction(),
        htmlmin({
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true
        })
      )
    )
    .pipe(size({ title: 'html' }))
    .pipe(dest(config.paths.markup.dest))
}

export default markup
