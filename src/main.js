import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import VueClickAway from "vue3-click-away"
import './styles/main.scss'

import i18n from './locales'

const app = createApp(App)
app
  .use(i18n)
  .use(VueClickAway)
  .use(Router)
  .mount('#app')
