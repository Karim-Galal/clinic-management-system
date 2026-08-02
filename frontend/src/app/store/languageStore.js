import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLanguageStore = create(
    persist(
        (set) => ({

            language: "en",

            setLanguage: (language) => {

                document.documentElement.lang = language;

                document.documentElement.dir =
                    language === "ar" ? "rtl" : "ltr";

                set({ language });

            },

            initializeLanguage: () => {

                const { language } = useLanguageStore.getState();

                document.documentElement.lang = language;

                document.documentElement.dir =
                    language === "ar" ? "rtl" : "ltr";

            },

        }),
        {
            name: "clinicflow-language",
        }
    )
);

export default useLanguageStore;