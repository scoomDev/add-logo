import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

// VIEWS
import Home from '../views/Home.vue'
import Login from "../views/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.getters.isLoggedIn) next()
    else next('/login')
  } else next()
})

export default router
