import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import Landing from '../pages/Landing.vue'
import LoginFailed from '../pages/LoginFailed.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login-failed',
    name: 'Login Failed',
    component: LoginFailed
  },
  {
    path: '/login',
    name: 'Login ',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
