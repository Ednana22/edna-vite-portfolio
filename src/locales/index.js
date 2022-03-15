import { createI18n } from 'vue-i18n'
import zhTw from './lang/zh-tw.json'
import en from './lang/en.json'

import { useStorage } from '@vueuse/core'
const lang = useStorage('edna_lang') || navigator.language.toLowerCase()

if (lang.value !== 'zh-tw') lang.value = 'en'

const i18n = createI18n({
  locale: lang.value,
  fallbackLocale: 'zh-tw',
  globalInjection: true,
  legacy: false,
  messages: {
    'zh-tw': zhTw,
    en
  }
})

export default i18n
