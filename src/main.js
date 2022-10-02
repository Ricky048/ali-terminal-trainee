import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入iconfont Symbol图标包
import '../iconfont.js'

// 引入全局view
import Header from '@/views/Header.vue'

// 全局配置请求根路径
axios.defaults.baseURL = ''
// 将axios挂载到vue上，之后在项目的vue实例中使用axios都可以使用this.$http进行访问
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('HeaderBox', Header)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
