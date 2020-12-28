export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['nuxt-fontawesome', '@nuxtjs/vuetify'
  ],
  fontawesome : {
    component : 'fas',
    icons : {
    solid : true,
    brands : true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios',
  '@nuxtjs/auth-next', '@nuxtjs/auth'
  ],
 

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  axios:{
    baseURL:'http://localhost:3000'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users', method: 'post', propertyName:'data.token'},
          logout: false,
          user: { url: '/users', method: 'get' , propertyName:'data.attributes'}
        }
      }
    }
  }
  
}

