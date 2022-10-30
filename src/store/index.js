import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedin: false
  },
  mutations: {
    // UPDATE_STATUS(state, payload) {
    //   state.loggedin = payload
    // }
  },
  actions: {
    // login(context, payload) {
    //   const status = context.state.loggedin
    //   context.commit('UPDATE_STATUS', status)
    // }
  },
  getters: {
    // newStatus: function (state) {
    //   return
    // }
  },

  modules: {
  }
})
