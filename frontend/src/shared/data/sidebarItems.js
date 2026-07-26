import {
    HiHome,
    HiUsers,
    // HiUserCircle,
    HiCalendarDays,
    HiCog6Tooth,
} from "react-icons/hi2";

export const sidebarItems = [
    {
        label: "navigation:general",
        items: [
            {
                label: "navigation:dashboard",
                icon: HiHome,
                to: "/staff/dashboard",
            },
        ],
    },
    {
        label: "navigation:reception",
        items: [
            {
                label: "navigation:patients",
                icon: HiUsers,
                to: "/staff/patients",
            },
            {
                label: "navigation:appointments",
                icon: HiCalendarDays,
                to: "/staff/appointments",
            },
        ],
    },
    {
        label: "navigation:management",
        items: [
            {
                label: "navigation:settings",
                icon: HiCog6Tooth,
                to: "/staff/settings",
            },
        ],
    },
];