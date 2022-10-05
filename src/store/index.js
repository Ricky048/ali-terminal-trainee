import Vue from 'vue'
import Vuex from 'vuex'

// 引入插件
import createPersistedState from 'vuex-persistedstate'

import app from './modules/app'
// 导入其他vuex模块
import weather from './weather.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // 在此处挂载其他位置的模块
  modules: {
    m_weather: weather,
    app
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: 'store',
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state }
      }
    })
  ]
})
