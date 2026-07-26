import { useTranslation } from "react-i18next";

function PageTitle({
    title,
    description,
    actions,
}) {
    const { t } = useTranslation();

    return (
        <div className="mb-8 flex items-start justify-between gap-6">

            <div>

                <h1 className="text-3xl font-bold text-surface-foreground">
                    {t(title)}
                </h1>

                {description && (
                    <p className="mt-2 text-muted-foreground">
                        {t(description)}
                    </p>
                )}

            </div>

            {actions && (
                <div className="shrink-0">
                    {actions}
                </div>
            )}

        </div>
    );
}

export default PageTitle;