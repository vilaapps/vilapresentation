import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  pt: () => require('./translations/pt.json'),
}

export const setI18nConfig = () => {
  const locale = getLocale()

  setDefaultLocale(locale)

  translate.cache.clear()
  i18n.translations = translationGetters[locale]()
  i18n.locale = locale
}

const getLocale = () => getDefaultLocale() || getBrowserLanguage() || "pt"

export const setDefaultLocale = (language) => {
  localStorage.setItem('language', language)
}

export const getDefaultLocale = () => localStorage.getItem('language');

const getBrowserLanguage = () => {
  const {userLanguage, language} = window.navigator
  const browserLanguage = userLanguage || language;

  const locale = getAvailableLocale(browserLanguage)

  return locale
}

const getAvailableLocale = (language) => {
  const availableTranslations = Object.entries(translationGetters)

  language = language.toLowerCase()
  const availabeTranslation = 
    availableTranslations
      .filter(translation => language.includes(translation[0]))[0]
  
  const locale = availabeTranslation && availabeTranslation[0]

  return locale

}

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
)