import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersDB:[]
  },
  mutations: {
    ADD_USERS(state, users){
      state.usersDB = users
    },
  },
  actions: {
  },
  modules: {
  }
})
