import { useTranslation } from "react-i18next";
import clsx from "clsx";

import LogoIcon from "./LogoIcon";

function Logo({
    showText = true,
    className,
}) {
    const { t } = useTranslation();

    return (
        <div className={clsx("flex items-center gap-3", className)}>
            <LogoIcon />

            {showText && (
                <div>
                    <h2 className="text-lg font-bold text-surface-foreground">
                        {t("common:app_name")}
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        {t("common:app_description")}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Logo;