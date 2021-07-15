import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import Landing from '../pages/Landing.vue'
import LoginFailed from '../pages/LoginFailed.vue'
import RegisterFailed from '../pages/RegisterFailed.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import RestorePass from '../pages/RestorePass.vue'
import RestorePassCode from '../pages/RestorePassCode.vue'
import RestorePassCodeError from '../pages/RestorePassCodeError.vue'
import RestorePassNew from '../pages/RestorePassNew.vue'
import RestorePassError from '../pages/RestorePassError.vue'
import RestorePassSuccess from '../pages/RestorePassSuccess.vue'

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
    path: '/register-failed',
    name: 'RegisterFailed',
    component: RegisterFailed
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
  },
  {
    path: '/restore-pass',
    name: 'RestorePass',
    component: RestorePass
  },
  {
    path: '/restore-pass-code',
    name: 'RestorePassCode',
    component: RestorePassCode
  },
  {
    path: '/restore-pass-code-error',
    name: 'RestorePassCodeError',
    component: RestorePassCodeError
  },
  {
    path: '/restore-pass-error',
    name: 'RestorePassError',
    component: RestorePassError
  },
  {
    path: '/restore-pass-new',
    name: 'RestorePassNew',
    component: RestorePassNew
  },
  {
    path: '/restore-pass-success',
    name: 'RestorePassSuccess',
    component: RestorePassSuccess
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
