import getOrigin from './getOrigin'
import extractHostName from './extractHostName'

/**
 * Removes extra spaces (more than one)
 * Such as remove any space before and after the text
 * @param {String} value
 * @returns {String} the value without extra spaces
 */
function removeExtraSpaces(value) {
  return value.replace(/\s+/g, ' ').trim()
}

function scrollToCenter(event) {
  event.preventDefault()
  const target = $(this.hash)

  // Calcula o meio do target para que ele fique centralizado na tela
  const offsetTop = $(window).height() / 2 - target.height() / 2

  $(window).scrollTo(target, 600, {
    offset: -offsetTop
  })
}

function scrollTo(event) {
  event.preventDefault()
  const target = $(this.hash)

  $(window).scrollTo(target, 600)
}

export {
  removeExtraSpaces,
  getOrigin,
  extractHostName,
  scrollToCenter,
  scrollTo
}
