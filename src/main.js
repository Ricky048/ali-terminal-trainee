import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入iconfont Symbol图标包
import '../iconfont.js'

// Install plugins
import './plugins'

import './styles/index.less'

// 全局配置请求根路径
// 这里使用的是和风天气的api
axios.defaults.baseURL = 'https://devapi.qweather.com/v7/weather'
// 将axios挂载到vue上，之后在项目的vue实例中使用axios都可以使用this.$http进行访问
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
