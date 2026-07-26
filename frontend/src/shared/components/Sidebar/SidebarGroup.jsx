import { useTranslation } from "react-i18next";

import SidebarItem from "./SidebarItem";

function SidebarGroup({ group }) {

    const { t } = useTranslation();

    return (

        <div className="mb-6">

            <h3
                className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
                {t(group.label)}
            </h3>

            <div className="space-y-1">

                {group.items.map((item) => (

                    <SidebarItem
                        key={item.to}
                        item={item}
                    />

                ))}

            </div>

        </div>

    );
}

export default SidebarGroup;