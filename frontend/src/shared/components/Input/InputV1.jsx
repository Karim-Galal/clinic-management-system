import clsx from "clsx";

function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-1">
            {label && (
                <label className="label">
                    {label}
                </label>
            )}

            <input
                className={clsx(
                    "input input-default",
                    error && "input-error",
                    className
                )}
                {...props}
            />

            {error && (
                <p className="caption text-danger">
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;