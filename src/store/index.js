import Vue from 'vue'
import Vuex from 'vuex'

import cookappslab from './cookappslab'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cookappslab
  }
})

export default store
