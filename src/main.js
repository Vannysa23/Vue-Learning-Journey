import { createApp } from 'vue'
import './assets/css/style.css'
import './assets/css/fanta.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
