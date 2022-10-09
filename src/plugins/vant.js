import Vue from 'vue'

import { Tabbar, TabbarItem, NavBar, PullRefresh } from 'vant'
import 'vant/lib/index.css'

const components = [Tabbar, TabbarItem, NavBar, PullRefresh]

components.forEach((component) => {
  Vue.use(component)
})
