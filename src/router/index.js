import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 运动模块
const sportRoutes = [
  {
    path: '/sport',
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
  },
  {
    path: '/mymessage',
    name: 'mymessage',
    meta: {
      hiddenHeader: true
    },
    component: () => import('@/views/mymessage.vue')
  },
  {
    path: '/set',
    name: 'set',
    meta: {
      hiddenHeader: true
    },
    component: () => import('@/views/set.vue')
  },
  {
    path: '/more',
    name: 'more',
    meta: {
      hiddenHeader: true
    },
    component: () => import('@/views/more.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
