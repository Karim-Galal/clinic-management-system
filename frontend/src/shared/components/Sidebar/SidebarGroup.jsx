import { useTranslation } from "react-i18next";
import {clsx } from "clsx";

import SidebarItem from "./SidebarItem";

function SidebarGroup({ group ,  collapsed }) {

    const { t } = useTranslation();

    return (

        <div className="mb-6">
          <h3
              className={clsx(
                  "mb-2 overflow-hidden whitespace-nowrap px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-all duration-300",
                  collapsed
                      ? "max-h-0 opacity-0"
                      : "max-h-8 opacity-100"
              )}
          >
              {t(group.label)}
          </h3>

            <div className="space-y-1">

                {group.items.map((item) => (

                    <SidebarItem
                        key={item.to}
                        item={item}
                        collapsed={collapsed}
                    />

                ))}

            </div>

        </div>

    );
}

export default SidebarGroup;