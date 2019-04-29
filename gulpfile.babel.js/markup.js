import { src, dest } from 'gulp'
import nunjucks from 'gulp-nunjucks'
import htmlmin from 'gulp-htmlmin'
import rename from 'gulp-rename'
import through2 from 'through2'
import gulpIf from 'gulp-if'
import size from 'gulp-size'
import path from 'path'
import fs from 'fs'

import { requireNoCache } from './utils'
import config from './config'

const _data = () => {
  const _getPageData = file => {
    let pageData
    let revManifest = `./${config.paths.base.dest}/rev-manifest.json`
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
      config: { ...config },
      ...pageData
    }

    if (fs.existsSync(revManifest)) {
      return {
        ...pageData,
        ...requireNoCache(`.${revManifest}`)
      }
    }

    return pageData
  }

  return through2.obj((file, _, cb) => {
    file.data = _getPageData(file)
    cb(null, file)
  })
}

const _makePageRoute = () => {
  return rename(file => {
    if (file.basename !== 'index') {
      file.dirname = file.basename
      file.basename = 'index'
    }
    file.extname = '.html'
  })
}

/**
 * Scan your HTML for assets & optimize them
 */
function markup() {
  return src(config.paths.markup.src, { debug: config.debug })
    .pipe(_data())
    .pipe(nunjucks.compile())
    .pipe(_makePageRoute())
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
