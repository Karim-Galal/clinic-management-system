import { useEffect } from "react";

function useLockBodyScroll(enabled) {
    useEffect(() => {
        if (!enabled) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [enabled]);
}

export default useLockBodyScroll;