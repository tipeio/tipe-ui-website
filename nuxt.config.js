module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tipe-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Docs for tipe-ui' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#6047fa' },
  /*
  ** Build configuration
  */
  css: ['~static/global.css'],
  plugins: ['~/plugins/vue-highlight'],
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
      const cssLoader = config.module.rules.find(
        loader => loader.test.toString() === '/\\.css$/'
      )
      cssLoader.use.push('postcss-loader')

      const urlLoader = config.module.rules.find(
        rule => rule.loader === 'url-loader'
      )
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader' // `vue-svg` for webpack 1.x
      })
    }
  }
}
