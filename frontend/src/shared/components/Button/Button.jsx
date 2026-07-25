import clsx from "clsx";

import Spinner from "../Spinner/Spinner";

function Button({
    children,

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
            className={clsx("btn btn-primary", className)}
            {...props}
        >
            {/* {loading ? loadingText : children} */}
            {
              loading
                  ?
                  <>
                      <Spinner />

                      {loadingText}
                  </>
                  :

                  children
            }
        </button>
    );
}

export default Button;