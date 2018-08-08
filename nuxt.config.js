module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-test',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /**
       * config iview-loader
       */
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'iview-loader',
        options: {
          prefix: false
        }
      })
    },
    vendor: ['~/plugins/iview']
  },
  css: [
    { src: '~assets/style/main.scss', lang: 'scss'},
    { src: 'iview/dist/styles/iview.css'}
  ],
  plugins: ['~/plugins/iview'],
  modules: [
    '@nuxtjs/axios',
    'nuxt-sass-resources-loader',
  ],
  sassResources: [
    '~assets/style/variables.scss'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    // '/api/': { target: 'http://v.juhe.cn/', pathRewrite: {'^/api/': ''} }
    '/cpro/': {
      target: 'http://119.27.167.20:8002/'
    }
  }
}
