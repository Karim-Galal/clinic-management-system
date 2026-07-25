import { HiOutlineLanguage } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {

    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {

        i18n.changeLanguage(lang);

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar"
                ? "rtl"
                : "ltr";
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