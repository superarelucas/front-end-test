import leven from 'leven'

/**
 * Class representando um conshelheiro de e-mail
 */
class EmailSuggestion {
  /**
   * Cria um conselheiro de e-mail
   */
  constructor() {
    this.domains = [
      'aol.com',
      'att.net',
      'comcast.net',
      'facebook.com',
      'gmail.com',
      'gmx.com',
      'googlemail.com',
      'google.com',
      'hotmail.com',
      'mac.com',
      'me.com',
      'mail.com',
      'msn.com',
      'live.com',
      'sbcglobal.net',
      'verizon.net',
      'yahoo.com',
      'yahoo.com.br',
      'hotmail.com.br',
      'outlook.com.br',
      'uol.com.br',
      'bol.com.br',
      'terra.com.br',
      'ig.com.br',
      'itelefonica.com.br',
      'r7.com',
      'zipmail.com.br',
      'globo.com',
      'globomail.com',
      'oi.com.br'
    ]
  }

  /**
   * Extrai o domínio de um e-mail (texto após o '@')
   * @param {String} email email à ser extraido o domínio
   * @returns {String} domínio do email recebido por parâmetro
   */
  getDomainFromEmail(email) {
    let splittedEmail = email.split('@')

    if (splittedEmail.length === 1) {
      return null
    }

    return splittedEmail[splittedEmail.length - 1]
  }

  /**
   * Classifica um domínio com a proximidade com outros domínios da lista, utilizando o pacote 'leven'
   * @param {String} domain Dóminio de servidor de email a ser comparado com a lista de domínios para recomendação
   * @returns {String} Objeto com domínio e classificação numerica de proximidade com o domínio passado por parâmetro
   */
  classify(domain) {
    return this.domains.map(d => ({
      domain: d,
      rating: leven(domain, d)
    }))
  }

  /**
   * @param {String} email E-mail para busca a melhor correspondência
   * @returns {String}
   */
  bestMatch(domain) {
    let classification
    let bestRating

    if (!domain) {
      return null
    }

    classification = this.classify(domain)
    bestRating = classification.reduce((min, c) => {
      return c.rating < min ? c.rating : min
    }, classification[0].rating)

    return classification.find(c => c.rating === bestRating).domain
  }

  makeSuggestion(input, suggestionBlock, suggestionLabel) {
    const email = input.value
    let splittedEmail = email.split('@')
    let domain = splittedEmail[splittedEmail.length - 1]
    let suggestion

    // Não continua a função se não tiver @ ou se não tiver texto após o @
    if (splittedEmail.length === 1 || !splittedEmail[1]) {
      suggestionBlock.hidden = true
      return null
    }

    suggestion = this.bestMatch(domain)

    if (suggestion !== domain) {
      suggestionLabel.innerHTML = `${
        splittedEmail[0]
      }@<strong>${suggestion}</strong>`
      suggestionBlock.hidden = false
    } else {
      suggestionBlock.hidden = true
    }
  }

  watch(element, suggestionBlock) {
    const suggestionLabel = suggestionBlock.querySelector(
      '.email-suggestion-link'
    )

    element.addEventListener('change', event =>
      this.makeSuggestion(event.target, suggestionBlock, suggestionLabel)
    )

    suggestionLabel.addEventListener('click', event => {
      event.preventDefault()
      suggestionBlock.hidden = true
      element.value = suggestionLabel.innerText
    })
  }
}

export default EmailSuggestion
