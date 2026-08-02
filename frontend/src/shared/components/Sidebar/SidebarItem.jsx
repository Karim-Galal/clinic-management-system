import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {clsx} from "clsx";

function SidebarItem({ item ,collapsed  }) {


    const { t } = useTranslation();

    const Icon = item.icon;

    return (

        <NavLink
            to={item.to}
            className={({ isActive }) => `
                flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all
                
                ${

                    isActive
                        ? "bg-sidebar-active text-sidebar-active-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-surface-foreground"
                }
            `}
        >

            <Icon className="size-5 shrink-0" title={t(item.label)} />
            <span
                className={clsx(
                    "overflow-hidden whitespace-nowrap font-medium transition-all duration-300",
                    collapsed
                        ? "w-0 opacity-0"
                        : "w-auto opacity-100"
                )}
            >
                {t(item.label)}
            </span>
            

        </NavLink>

    );
}

export default SidebarItem;