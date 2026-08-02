import { Outlet } from "react-router-dom";

import Sidebar from "@/shared/components/Sidebar/Sidebar";
import Navbar from "@/shared/components/Navbar/Navbar";

import useSidebarStore from "@/app/store/sidebarStore";


function StaffLayout() {

    const { isCollapsed } = useSidebarStore();

    return (
        <div className="flex min-h-dvh bg-background">

            <Sidebar collapsed={isCollapsed} />

            <div className="flex flex-1 flex-col">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-8">

                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default StaffLayout;