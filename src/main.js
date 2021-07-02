import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/index.js'
import './index.css'


createApp(App).use(router).use(Vuex).use(store).mount('#app')
