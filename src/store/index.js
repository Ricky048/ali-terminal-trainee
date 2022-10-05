import Vue from 'vue'
import Vuex from 'vuex'

// 导入其他vuex模块
import weather from './weather.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    m_weather: weather
  }
})
