import fs from 'fs'

const company = {
  name: 'Brandi',
  slogan: 'Creative page Template'
}

export default {
  publicURL: function() {
    return this.ctx.config.isProduction() ? 'https://example.com' : ''
  },
  company: {
    ...company,
    social: {
      facebook: '#',
      instagram: '#',
      whatsapp: {
        raw: '#',
        formatted: '#'
      }
    },
    url: 'https://'
  },
  og: {
    siteName: company.name,
    locale: 'pt-BR'
  },
  maskIcon: '#',
  tileColor: '#',
  themeColor: '#',
  fbAppID: '123',
  appName: company.name,
  author: 'Riva Junior',
  gtmID: 'GTM-',
  currentYear: new Date().getFullYear(),
  asset: function(fileName) {
    const ctx = this.ctx

    if (ctx.config.isProduction()) {
      const fileNameRevisioned = ctx[fileName]

      if (!fileNameRevisioned) {
        console.error(
          `Arquivo ${fileName} não escontrado no manifesto. Verifico se o mesmo está sendo versionado ou se existe.`
        )

        return ''
      }

      return `${
        ctx.config.isProduction() ? ctx.publicURL : ''
      }${fileNameRevisioned}`
    }

    if (!fs.existsSync(`${ctx.config.paths.base.dest}/${fileName}`)) {
      console.error(`Arquivo ${fileName} não escontrado.`)

      return ''
    }

    return fileName
  }
}
