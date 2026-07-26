import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SidebarItem({ item }) {

    const { t } = useTranslation();

    const Icon = item.icon;

    return (

        <NavLink
            to={item.to}
            className={({ isActive }) => `
                flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all
                ${
                    // isActive
                    //     ? "bg-primary-100 text-primary-700"
                    //     : "text-muted-foreground hover:bg-muted hover:text-surface-foreground"

                    isActive
                        ? "bg-sidebar-active text-sidebar-active-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-surface-foreground"
                }
            `}
        >

            <Icon className="size-5 shrink-0" />

            <span className="font-medium">

                {t(item.label)}

            </span>

        </NavLink>

    );
}

export default SidebarItem;