import { src, parallel } from 'gulp'
import jsdoc from 'gulp-jsdoc3'
import sassdoc from 'sassdoc'

import config from './config'

/**
 * Gera arquivos de documentação dos arquivos scss baseado no plugin SassDoc
 *
 * @see {@link http://sassdoc.com/}
 */
const buildSassdoc = () => {
  return src(config.paths.styles.all, { read: false }).pipe(
    sassdoc({
      dest: 'docs/sass',
      verbose: config.debug
    })
  )
}

const buildJsdoc = () => {
  return src(['README.md', config.paths.scripts.all], {
    read: false
  }).pipe(jsdoc())
}

const docs = () => parallel(buildJsdoc, buildSassdoc)

export default docs
export { docs, buildSassdoc, buildJsdoc }
