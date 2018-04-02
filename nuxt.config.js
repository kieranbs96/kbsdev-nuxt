module.exports = {
  head: {
    title: 'Kieran Smith - Web Developer 👋',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'My name is Kieran Smith, I am a Front End Web Developer based in London, England, United Kingdom. I create bespoke websites and web apps using modern web technologies such as HTML, CSS, Javascript including React & jQuery.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
    ],
  },
  css: [
    './assets/main.css'
  ],
  loading: { color: '#3B8070' },
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
