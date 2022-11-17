import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

createApp(App)
  .provide('APIurl', 'http://127.0.0.1:8000')
  .use(VueAxios, axios)
  .use(router)
  .mount('#app')
