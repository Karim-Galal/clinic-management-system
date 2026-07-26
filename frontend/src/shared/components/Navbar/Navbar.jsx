import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Navbar() {
    return (
        <header
            className="flex h-18 items-center justify-between border-b border-border bg-surface px-8"
        >
            {/* Left */}

            <div />

            {/* Right */}

            <div className="flex items-center gap-3">

                <LanguageSwitcher />

                <ThemeToggle />

            </div>

        </header>
    );
}

export default Navbar;