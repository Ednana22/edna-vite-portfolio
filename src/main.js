import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import VueClickAway from 'vue3-click-away'
import VueLazyload from '@jambonn/vue-lazyload'


import './styles/main.scss'

const app = createApp(App)

app
  .use(VueLazyload)
  .use(VueClickAway)
  .use(Router)
  .mount('#app')
