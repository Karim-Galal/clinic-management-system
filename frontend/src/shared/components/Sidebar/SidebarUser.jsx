import { useState } from "react";
import { useTranslation } from "react-i18next";

import clsx from "clsx";

import {
    HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";

import LogoutModal from "@/features/auth/components/LogoutModal";

function SidebarUser({ collapsed }) {

    const { t } = useTranslation();

    const [logoutOpen, setLogoutOpen] = useState(false);

    return (
        <>
            <div className="border-t border-border p-4">

                <button
                    type="button"
                    onClick={() => setLogoutOpen(true)}
                    className={clsx(
                        `
                        flex
                        w-full
                        items-center
                        gap-3

                        rounded-xl

                        px-3
                        py-2.5

                        text-danger

                        transition-all
                        duration-200

                        hover:bg-danger/10
                        hover:text-danger

                        active:scale-[0.98]
                        `,
                        collapsed
                            ? "justify-center"
                            : "justify-start"
                    )}
                >
                    <HiOutlineArrowLeftOnRectangle className="size-5 shrink-0" />

                    {!collapsed && (
                        <span className="font-medium">
                            {t("auth:logout.title")}
                        </span>
                    )}
                </button>

            </div>

            <LogoutModal
                open={logoutOpen}
                onClose={() => setLogoutOpen(false)}
            />

        </>
    );
}

export default SidebarUser;