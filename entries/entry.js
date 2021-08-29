import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import VueClickAway from "vue3-click-away"

import './styles/main.scss'

const app = createApp(App)
app
  .use(VueClickAway)
  .use(Router)
  .mount('#app')
