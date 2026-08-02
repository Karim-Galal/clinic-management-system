import clsx from "clsx";

import Spinner from "../Spinner/Spinner";

function Button({
    children,

    variant = "primary",

    size = "md",

    loading = false,

    loadingText = "Loading...",

    className = "",

    disabled = false,

    type = "button",

    ...props
}) {

    return (
        <button
            type={type}
            disabled={loading || disabled}
            className={clsx(
                "btn",
                {
                    "btn-primary": variant === "primary",
                    "btn-secondary": variant === "secondary",
                    "btn-outline": variant === "outline",
                    "btn-danger": variant === "danger",

                    "btn-sm": size === "sm",
                    "btn-md": size === "md",
                    "btn-lg": size === "lg",
                },
                className
            )}
            {...props}
        >
            {
                loading ? (
                    <>
                        <Spinner />
                        {loadingText}
                    </>
                ) : (
                    children
                )
            }
        </button>
    );
}

export default Button;