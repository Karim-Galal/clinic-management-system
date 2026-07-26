import { create } from "zustand";

const getInitialTheme = () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const useThemeStore = create((set) => ({

    theme: getInitialTheme(),

    toggleTheme: () =>
        set((state) => {

            const nextTheme =
                state.theme === "light"
                    ? "dark"
                    : "light";

            document.documentElement.dataset.theme = nextTheme;

            localStorage.setItem("theme", nextTheme);

            return {
                theme: nextTheme,
            };
        }),

    initializeTheme: () => {

        const theme = getInitialTheme();

        document.documentElement.dataset.theme = theme;

        localStorage.setItem("theme", theme);

        set({ theme });

    },

}));

export default useThemeStore;