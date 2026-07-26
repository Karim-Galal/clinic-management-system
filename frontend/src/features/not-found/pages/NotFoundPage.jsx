import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useAuthStore from "@/features/auth/store/authStore";

import Logo from "@/shared/components/Logo";
import Card from "@/shared/components/Card";
import Button from "@/shared/components/Button";

function NotFoundPage() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const { isAuthenticated } = useAuthStore();

    const handleNavigation = () => {
        navigate(
            isAuthenticated
                ? "/staff/dashboard"
                : "/staff/login",
            { replace: true }
        );
    };

    return (
        <main className="container flex min-h-dvh items-center justify-center py-8">

            <Card className="w-full max-w-xl p-8 text-center md:p-12">

                <Logo showText={false} className="mx-auto mb-8" />

                <span className="text-7xl font-bold text-primary md:text-8xl">
                    404
                </span>

                <h1 className="mt-6 text-3xl font-bold text-surface-foreground">
                    {t("notFound:title")}
                </h1>

                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                    {t("notFound:description")}
                </p>

                <Button
                    onClick={handleNavigation}
                    className="mt-10"
                >
                    {isAuthenticated
                        ? t("notFound:back_dashboard")
                        : t("notFound:go_login")}
                </Button>

            </Card>

        </main>
    );
}

export default NotFoundPage;