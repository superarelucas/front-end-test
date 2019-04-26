import Inputmask from 'inputmask/dist/inputmask/inputmask'

/**
 * Configura mascara de telefones nacionais válidos
 * em todos os inputs com a class recebida por parametro.
 */
function maskTelephones() {
  const inputsPhoneMask = document.getElementsByClassName('mask-tel')

  for (let i = 0, len = inputsPhoneMask.length; i < len; i++) {
    Inputmask({
      regex:
        '(\\([0-9]{2}\\) (([0|7|8|9])|([2|3|4|5][0-9])|([7|8|9][0-9]{2}))[0-9]{2}-[0-9]{4})'
    }).mask(inputsPhoneMask[i])
  }
}

export { maskTelephones }
