import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 运动模块
const sportRoutes = [
  {
    path: "/sport",
    name: 'sport',
    component: () => import('@/views/sport/index.vue')
  }
]

const routes = [
  {
    path: '/',
    name: 'weather',
    component: () => import('@/views/weather.vue')
  },
  ...sportRoutes,
  {
    path: '/my',
    name: 'my',
    meta: {
      hiddenHeader: true
    },
    component: () => import('@/views/my.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
