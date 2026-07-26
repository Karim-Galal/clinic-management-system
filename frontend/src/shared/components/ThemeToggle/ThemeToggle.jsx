import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import useThemeStore from "@/app/store/themeStore";

function ThemeToggle() {

    const { theme, toggleTheme } = useThemeStore();

    return (

        <button
            type="button"
            onClick={toggleTheme}
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface transition hover:bg-muted"
            aria-label="Toggle Theme"
        >

            {
                theme === "dark"
                    ? <HiOutlineSun className="size-5" />
                    : <HiOutlineMoon className="size-5" />
            }

        </button>

    );
}

export default ThemeToggle;