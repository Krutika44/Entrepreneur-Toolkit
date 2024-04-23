// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../src/pages/locales/translation.en.json";
import translationFR from "../src/pages/locales/translation.fr.json";
import translationHI from "../src/pages/locales/translation.hi.json";
import translationMR from "../src/pages/locales/translation.mr.json";
import translationES from "../src/pages/locales/translation.es.json";
import translationDE from "../src/pages/locales/translation.de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
    hi: {
      translation: translationHI,
    },
    mr: {
      translation: translationMR,
    },
    es: {
      translation: translationES,
    },
    de: {
      translation: translationDE,
    },
  },
  lng: localStorage.getItem("language") || "en", // Load language from localStorage if available, otherwise default to 'en'
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
