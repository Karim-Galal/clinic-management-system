import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";

function LanguageSwitcher() {

    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {

        i18n.changeLanguage(lang);

        document.documentElement.lang = lang;
        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";
    };

    return (

        <div
            className="
                inline-flex
                items-center
                rounded-xl
                border
                border-border
                bg-surface
                p-1
                shadow-sm
            "
        >

            <HiLanguage
                className="
                    mx-2
                    text-lg
                    text-primary
                "
            />

            <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    transition-all
                    ${
                        i18n.language === "en"
                            ? "bg-primary text-white"
                            : "hover:bg-muted"
                    }
                `}
            >
                EN
            </button>

            <button
                type="button"
                onClick={() => changeLanguage("ar")}
                className={`
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    transition-all
                    ${
                        i18n.language === "ar"
                            ? "bg-primary text-white"
                            : "hover:bg-muted"
                    }
                `}
            >
                عربي
            </button>

        </div>

    );

}

export default LanguageSwitcher;