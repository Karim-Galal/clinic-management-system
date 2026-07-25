import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enAuth from "@/locales/en/auth.json";
import arAuth from "@/locales/ar/auth.json";

import enValidation from "@/locales/en/validation.json";
import arValidation from "@/locales/ar/validation.json";

import enErrors from "@/locales/en/errors.json";
import arErrors from "@/locales/ar/errors.json";


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
                errors: enErrors
            },

            ar: {
                auth: arAuth,
                validation: arValidation,
                errors: arErrors,
            },
        },
    });

export default i18n;