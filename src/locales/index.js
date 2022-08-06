import { createI18n } from 'vue-i18n'
import zhTw from './lang/zh-tw.json'
import en from './lang/en.json'

import { useStorage } from '@vueuse/core'
import { useNavigatorLanguage } from '@vueuse/core'
const { language: browserLang } = useNavigatorLanguage()
const lang = useStorage('edna_lang', browserLang.value.toLowerCase())

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
