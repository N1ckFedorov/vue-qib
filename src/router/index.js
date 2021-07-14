import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import LoginFailed from '../pages/LoginFailed.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login-failed',
    name: 'Login Failed',
    component: LoginFailed
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
