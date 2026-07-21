import clsx from "clsx";

function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    return (
        <button
            className={clsx(
                "btn",
                `btn-${variant}`,
                `btn-${size}`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;