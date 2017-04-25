import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './Home.vue'
import Search from './Search.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/search', name: 'search', component: Search },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
