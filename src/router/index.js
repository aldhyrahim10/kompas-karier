import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Karier from '../views/Karier.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/karier',
    name: 'Karier',
    component: Karier
  },
  {
    path: '/karier/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
