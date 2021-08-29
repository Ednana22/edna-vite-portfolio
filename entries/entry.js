import { createApp } from 'vue'
import App from '../src/App.vue'
import Router from '../src/router'
import VueClickAway from "vue3-click-away"

import '../src/styles/main.scss'

const app = createApp(App)
app
  .use(VueClickAway)
  .use(Router)
  .mount('#app')
