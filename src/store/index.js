import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import user from './user'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})
