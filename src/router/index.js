import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/HomeView.vue'
import City from '@/pages/city/CityView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name:'city',
    component:City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
