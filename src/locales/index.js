import { createI18n } from 'vue-i18n'
import zhTw from './zh-tw'
import en from './en'

const i18n = createI18n({
  locale: 'zh-tw',
  fallbackLocale: 'zh-tw',
  globalInjection: true,
  legacy: false,
  messages: {
    'zh-tw': zhTw,
    en
  }
})

export default i18n
