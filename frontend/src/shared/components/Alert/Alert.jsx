import clsx from "clsx";

function Alert({
    children,
    variant = "danger",
    className = "",
}) {
    return (
        <div
            className={clsx(
                "alert",
                `alert-${variant}`,
                className
            )}
            role="alert"
        >
            {children}
        </div>
    );
}

export default Alert;