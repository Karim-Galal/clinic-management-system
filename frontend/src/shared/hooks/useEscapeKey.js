import { useEffect } from "react";

function useEscapeKey(enabled, onEscape) {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onEscape();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [enabled, onEscape]);
}

export default useEscapeKey;