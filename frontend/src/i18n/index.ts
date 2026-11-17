import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import zhCNCommon from './locales/zh-CN/common.json'

const resources = {
  en: {
    common: enCommon,
  },
  'zh-CN': {
    common: zhCNCommon,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:
        typeof window !== 'undefined' &&
        window.localStorage.getItem('jingcraft-language') === 'zh-CN'
        ? 'zh-CN'
        : 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n