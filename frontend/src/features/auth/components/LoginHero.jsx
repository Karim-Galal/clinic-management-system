import { useTranslation } from "react-i18next";
// import Logo from "@/shared/components/Logo";


import {
    HiOutlineBuildingOffice2,
    HiOutlineUserGroup,
    HiOutlineCalendarDays,
    HiOutlineClipboardDocumentList,
    HiOutlineShieldCheck,
    HiOutlineBolt,
    HiOutlineCheckBadge,
} from "react-icons/hi2";

function LoginHero() {

    const { t } = useTranslation();

    return (

        <div
            className="relative hidden overflow-hidden lg:flex flex-col
                justify-between bg-linear-to-br from-primary-700 via-primary-600 to-primary-500
                p-14 text-white"
        >

            {/* Decorative Blobs */}

            <div className="absolute -top-28 inset-s-24 size-72 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-8 inset-e-6 size-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute top-1/2 inset-s-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

            {/* ====================================================== */}

            <div className="relative z-10">

                {/* Logo */}

                <div
                    className="inline-flex size-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
                >
                    <HiOutlineBuildingOffice2 className="size-8" />
                </div>

                {/* Heading */}

                <div className="mt-10 space-y-4">

                    <h2 className="text-5xl font-bold leading-tight">

                        {t("auth:hero_title")}

                    </h2>

                    <p className="max-w-md text-lg leading-relaxed text-white/80">

                        {t("auth:hero_description")}

                    </p>

                </div>

                {/* Features */}

                <div className="mt-12 space-y-4">

                    <FeatureCard
                        icon={<HiOutlineUserGroup />}
                        text={t("auth:feature_patients")}
                    />

                    <FeatureCard
                        icon={<HiOutlineCalendarDays />}
                        text={t("auth:feature_appointments")}
                    />

                    <FeatureCard
                        icon={<HiOutlineClipboardDocumentList />}
                        text={t("auth:feature_records")}
                    />

                </div>

            </div>

            {/* Bottom */}

            <div className="relative z-10 mt-16 flex flex-wrap gap-3">

                <Badge
                    icon={<HiOutlineShieldCheck />}
                    text={t("auth:secure")}
                />

                <Badge
                    icon={<HiOutlineBolt />}
                    text={t("auth:fast")}
                />

                <Badge
                    icon={<HiOutlineCheckBadge />}
                    text={t("auth:reliable")}
                />

            </div>

        </div>

    );

}

function FeatureCard({ icon, text }) {

    return (

        <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">

            <div className="text-2xl text-primary-100">

                {icon}

            </div>

            <span className="font-medium">

                {text}

            </span>

        </div>

    );

}

function Badge({ icon, text }) {

    return (

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">

            {icon}

            <span className="text-sm">

                {text}

            </span>

        </div>

    );

}

export default LoginHero;