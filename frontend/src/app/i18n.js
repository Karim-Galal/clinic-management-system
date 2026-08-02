import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import enAuth from "@/locales/en/auth.json";
import arAuth from "@/locales/ar/auth.json";

import enValidation from "@/locales/en/validation.json";
import arValidation from "@/locales/ar/validation.json";

import enErrors from "@/locales/en/errors.json";
import arErrors from "@/locales/ar/errors.json";

import enNavigation from "@/locales/en/navigation.json";
import arNavigation from "@/locales/ar/navigation.json";

import enCommon from "@/locales/en/common.json";
import arCommon from "@/locales/ar/common.json";

import enDashboard from "@/locales/en/dashboard.json";
import arDashboard from "@/locales/ar/dashboard.json";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",

        // lng: "en",
        // lng: useLanguageStore.getState().language,
        lng:
        JSON.parse(
            localStorage.getItem("clinicflow-language")
        )?.state?.language || "en",

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: {
                auth: enAuth,
                validation: enValidation,
                errors: enErrors,
                navigation: enNavigation,
                common: enCommon,
                dashboard: enDashboard,
            },

            ar: {
                auth: arAuth,
                validation: arValidation,
                errors: arErrors,
                navigation: arNavigation,
                common: arCommon,
                dashboard: arDashboard,
            },
        },
    });

export default i18n;