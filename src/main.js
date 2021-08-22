import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import './styles/main.scss'

const app = createApp(App)
app
  .use(Router)
  .mount('#app')
