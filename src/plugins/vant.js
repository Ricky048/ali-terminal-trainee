import Vue from 'vue'

import { Tabbar, TabbarItem, NavBar } from 'vant'
import 'vant/lib/index.css'

const components = [
  Tabbar,
  TabbarItem,
  NavBar
]

components.forEach(component => {
  Vue.use(component)
})
