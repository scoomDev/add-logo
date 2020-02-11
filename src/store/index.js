import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || '',
    currentUser: {},
    messages: []
  },
  getters: {
    isLoggedIn: state => !!state.token,
    getMessages: state => state.message || [],
    hasMessages: state => state.message.length > 0
  },
  actions,
  mutations
})
