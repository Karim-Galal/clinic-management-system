import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSidebarStore = create(
    persist(
        (set) => ({

            isCollapsed: false,

            toggleSidebar: () =>
                set((state) => ({
                    isCollapsed: !state.isCollapsed,
                })),

            collapseSidebar: () =>
                set({
                    isCollapsed: true,
                }),

            expandSidebar: () =>
                set({
                    isCollapsed: false,
                }),

        }),
        {
            name: "clinicflow-sidebar",
        }
    )
);

export default useSidebarStore;