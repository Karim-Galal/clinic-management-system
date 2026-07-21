import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enAuth from "@/locales/en/auth.json";
import arAuth from "@/locales/ar/auth.json";

import enValidation from "@/locales/en/validation.json";
import arValidation from "@/locales/ar/validation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",

        lng: "en",

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: {
                auth: enAuth,
                validation: enValidation,
            },

            ar: {
                auth: arAuth,
                validation: arValidation,
            },
        },
    });

export default i18n;