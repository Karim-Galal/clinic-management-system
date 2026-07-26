import { sidebarItems } from "@/shared/data/sidebarItems";

import Logo from "../Logo/Logo";
import SidebarGroup from "./SidebarGroup";

function Sidebar() {
    return (
        <aside
          className="flex h-dvh w-72 flex-col border-e border-border bg-surface"
        >
            {/* Logo */}

            <div className="border-b border-border p-6">
                <Logo />
            </div>

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto p-4">

                {sidebarItems.map((group) => (
                    <SidebarGroup
                        key={group.translationKey}
                        group={group}
                    />
                ))}

            </nav>

            {/* User */}

            <div className="border-t border-border p-4">

                User

            </div>

        </aside>
    );
}

export default Sidebar;