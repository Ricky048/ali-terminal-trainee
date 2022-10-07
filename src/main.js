import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import AMap from 'vue-amap'
Vue.use(AMap)

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'eea7c87fae2a8e20ff90f81708a3058c'
  // 插件集合 （插件按需引入）
  // plugin: ['AMap.Geolocation']
})

// 全局引入eCharts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 全局引入Lottie
import Lottie from 'vue-lottie'
Vue.component('Lottie', Lottie)

// 引入iconfont Symbol图标包
import '../iconfont.js'

// Install plugins
import './plugins'

// 全局配置请求根路径
// 这里使用的是和风天气的api
// axios.defaults.baseURL = 'https://devapi.qweather.com/v7/weather'
// 将axios挂载到vue上，之后在项目的vue实例中使用axios都可以使用this.$http进行访问
Vue.prototype.$http = axios

Vue.config.productionTip = false
// Vue.use(VueAMap)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
