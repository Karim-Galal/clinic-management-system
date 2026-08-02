import { sidebarItems } from "@/shared/data/sidebarItems";

import useSidebarStore from "@/app/store/sidebarStore";
import {clsx} from "clsx";



import {
    HiOutlineBars3,
    HiOutlineBars3BottomLeft,
} from "react-icons/hi2";

import Logo from "../Logo/Logo";
import SidebarGroup from "./SidebarGroup";
import SidebarUser from "./SidebarUser";


function Sidebar({ collapsed }) {

    const { toggleSidebar } = useSidebarStore();

    


    return (
        <aside
          className={clsx(
              "flex h-dvh  flex-col border-e border-border bg-surface transition-all duration-300",
              collapsed ? "w-20" : "w-72"
          )}
        >
            <div className="border-b border-border p-4 ">
                <Logo showText={!collapsed} />

                <button
                    type="button"
                    onClick={toggleSidebar}
                    className={clsx(
                        "mt-4 flex h-10 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground transition-all duration-200 hover:border-primary-300 hover:bg-muted hover:text-primary-600 active:scale-95",
                        collapsed ? "mx-auto w-10" : "w-full"
                    )}
                >
                    {collapsed ? (
                        <HiOutlineBars3 className="size-5" />
                    ) : (
                        <HiOutlineBars3BottomLeft className="size-5" />
                    )}
                </button>
            </div>
            {/* Navigation */}

            <nav className="flex-1 overflow-x-hidden overflow-y-auto p-4">

                {sidebarItems.map((group) => (
                    <SidebarGroup
                        key={group.translationKey}
                        group={group}
                        collapsed={collapsed}
                    />
                ))}

            </nav>

            {/* User */}
            <SidebarUser
                collapsed={collapsed}
            />
        </aside>
    );
}

export default Sidebar;