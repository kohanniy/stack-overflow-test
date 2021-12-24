import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultValue } from './config';
import localeRU from './locales/ru.json';

const resources = {
  ru: {
    translation: localeRU
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultValue,
    fallbackLng: defaultValue,
    debug: false,
    interpolation: {
      escapeValue: false
    },
    appendNamespaceToMissingKey: true
  });

export default i18n;