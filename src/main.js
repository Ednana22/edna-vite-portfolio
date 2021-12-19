import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import VueClickAway from 'vue3-click-away'
import VueLazyload from '@jambonn/vue-lazyload'
import 'uno.css'

import './styles/main.scss'
import i18n from './locales'
// import LoadingImage from './assets/loading.gif'

const app = createApp(App)

app
  .use(i18n)
  .use(VueLazyload, {
    // loading: LoadingImage
  })
  .use(VueClickAway)
  .use(Router)
  .mount('#app')
