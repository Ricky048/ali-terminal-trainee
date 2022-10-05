import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'weather',
    component: () => import('@/views/weather.vue')
  },
  {
    path: '/sport',
    name: 'sport',
    component: () => import('@/views/sport.vue')
  },
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
