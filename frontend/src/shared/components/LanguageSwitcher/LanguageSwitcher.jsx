import { HiOutlineLanguage } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import useLanguageStore from "@/app/store/languageStore";


function LanguageSwitcher() {

    const { i18n } = useTranslation();

    const {
        setLanguage,
    } = useLanguageStore();


    const changeLanguage = (language) => {


        i18n.changeLanguage(language);
        
        setLanguage(language);
    };

    return (
        <button
            type="button"
            onClick={() =>
                changeLanguage(
                    i18n.language === "en"
                        ? "ar"
                        : "en"
                )
            }
            className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 shadow-sm transition hover:border-primary-400 hover:text-primary-600"
        >
            <HiOutlineLanguage className="size-5" />

            <span>
                {i18n.language === "en"
                    ? "العربية"
                    : "English"}
            </span>
        </button>
    );
}

export default LanguageSwitcher;