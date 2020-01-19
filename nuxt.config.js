import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/main.scss',
    '~/assets/fonts/fonts.scss',
    '~/assets/fonts/styles.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/icons.js', ssr: false },
    // { src: '~/plugins/localStorage.js', ssr: false }
    { src: '~/plugins/icons.js' },
    { src: '~/plugins/init.js' },
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: 'http://207.154.193.34:8000/',
    baseURL: 'http://185.146.3.49:8000/',
    proxy: true
  },
  proxy: {
    '/api': {
      // target: 'http://207.154.193.34:8000/',
      target: 'http://185.146.3.49:8000/',
      changeOrigin: true
    }
  },
  // auth: {
  // strategies: {
  //   local: {
  //     endpoints: {
  //       login: { url: 'users/auth', method: 'post', propertyName: 'token' }
  //     }
  //     // tokenRequired: true,
  //     // tokenType: 'bearer'
  //   }
  // }
  // },
  router: {
    // middleware: ['auth']
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // defaultAssets: false,
    // defaultAssets: {
    //   icons: {
    //     iconfont: 'fa'
    //   }
    // },
    // icons: 'fa',
    treeShake: true,
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: '#67AAD5',
          accent: colors.grey,
          secondary: colors.amber,
          info: colors.teal,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
        // dark: {
        //   primary: '#67AAD5',
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
