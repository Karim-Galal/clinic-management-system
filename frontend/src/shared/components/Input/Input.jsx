import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(
(
{
    label,
    error,

    leftIcon,
    rightIcon,
    onRightIconClick,

    className,

    ...props
},
ref
) => {

    return (

        <div className="form-field">

            {label && (

                <label className="label">

                    {label}

                </label>

            )}

            <div className="relative">

                {/* Left Icon */}

                {leftIcon && (

                    <div
                        className="
                            absolute
                            inset-s-3
                            top-1/2
                            -translate-y-1/2
                            text-muted-foreground
                            pointer-events-none
                        "
                    >
                        {leftIcon}
                    </div>

                )}

                <input
                    ref={ref}
                    className={clsx(
                        "input input-default",

                        leftIcon && "ps-10",

                        rightIcon && "pe-10",

                        error && "input-error",

                        className
                    )}
                    {...props}
                />

                {/* Right Icon */}

                {rightIcon && (

                    <button
                        type="button"
                        onClick={onRightIconClick}
                        className="
                            absolute
                            inset-e-3
                            top-1/2
                            -translate-y-1/2
                            text-muted-foreground
                            hover:text-primary
                            transition-colors
                        "
                    >
                        {rightIcon}
                    </button>

                )}

            </div>

            {error && (

                <p className="text-sm text-danger">

                    {error}

                </p>

            )}

        </div>

    );

});

Input.displayName = "Input";

export default Input;