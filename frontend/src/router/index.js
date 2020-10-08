import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateCurriculum from '../views/CreateCurriculum.vue'
import DisplayCurricula from '../views/DisplayCurricula.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curricula',
    name: 'Display Curricula',
    component: DisplayCurricula
  },
  {
    path: '/curricula/create',
    name: 'Create',
    component: CreateCurriculum
  },
  {
    path: '/curricula/:id',
    name: 'DisplayCurriculum',
    component: DisplayCurriculum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
