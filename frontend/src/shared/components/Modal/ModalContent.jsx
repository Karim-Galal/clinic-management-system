import { forwardRef } from "react";
import { clsx } from "clsx";

const ModalContent = forwardRef(function ModalContent(
    {
        children,
        className = "",
    },
    ref
) {
    return (
        <div
            ref={ref}
            onClick={(e) => e.stopPropagation()}
            className={clsx(
                `w-full max-w-lg rounded-2xl border border-border bg-surface shadow-2xl`,
                className
            )}
        >
            {children}
        </div>
    );
});

export default ModalContent;