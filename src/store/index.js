import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    textColor: '#FFFFFF',
    bgColor: '#9BB9AA',
  },
  mutations: {},
  actions: {},
  getters: {
    textColor: state => state.textColor,
    bgColor: state => state.bgColor,
  },
})

export default store
