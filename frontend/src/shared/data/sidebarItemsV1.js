import {
    HiHome,
    HiUsers,
    HiUserCircle,
    // HiCalendarDays,
    // HiCog6Tooth,
} from "react-icons/hi2";

export const sidebarItems = [

    {
        label: "Dashboard",
        icon: HiHome,
        to: "/staff/dashboard",
    },

    {
        label: "Patients",
        icon: HiUsers,
        to: "/staff/patients",
    },

    {
        label: "Doctors",
        icon: HiUserCircle,
        to: "/staff/doctors",
    },

];