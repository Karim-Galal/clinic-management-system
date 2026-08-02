import { useEffect } from "react";

function useClickOutside(ref, enabled, onClickOutside) {
    useEffect(() => {
        if (!enabled) return;

        const handleMouseDown = (event) => {
            if (!ref.current) return;

            if (!ref.current.contains(event.target)) {
                onClickOutside();
            }
        };

        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [ref, enabled, onClickOutside]);
}

export default useClickOutside;