import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Tabbar, TabbarItem, NavBar } from 'vant'
import 'vant/lib/index.css'

// 引入iconfont Symbol图标包
import '../iconfont.js'

// 引入lottie动画组件
import LottieVue from 'vue-lottie'

// 引入全局view
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

// 全局配置请求根路径
// 这里使用的是和风天气的api
axios.defaults.baseURL = 'https://devapi.qweather.com/v7/weather'
// 将axios挂载到vue上，之后在项目的vue实例中使用axios都可以使用this.$http进行访问
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 组件
Vue.component('HeaderBox', Header)
Vue.component('Footer', Footer)
Vue.component('lottie', LottieVue)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
