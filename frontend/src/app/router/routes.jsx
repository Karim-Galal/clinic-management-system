import { Navigate } from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "./guards";
import { StaffIndexRedirect } from "./redirects";

// import PublicRoute from "./PublicRoute";
// import ProtectedRoute from "./ProtectedRoute";

import StaffLayout from "@/layouts/StaffLayout";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import NotFoundPage from "@/features/not-found/pages/NotFoundPage";

const routes = [
    {
        path: "/",
        element: <Navigate to="/staff/login" replace />,
    },

    {
        path: "staff",

        children: [

            {
                index: true,
                element: <StaffIndexRedirect />,
            },
            // ===========================
            // Public Routes
            // ===========================
            {
                element: <PublicRoute />,

                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },

                    // {
                    //     path: "register",
                    //     element: <RegisterPage />,
                    // },

                    // {
                    //     path: "forgot-password",
                    //     element: <ForgotPasswordPage />,
                    // },
                ],
            },

            // ===========================
            // Protected Routes
            // ===========================
            {
                element: <ProtectedRoute />,

                children: [
                    {
                        element: <StaffLayout />,

                        children: [
                            {
                                path: "dashboard",
                                element: <DashboardPage />,
                            },

                            // {
                            //     path: "patients",
                            //     element: <PatientsPage />,
                            // },

                            // {
                            //     path: "doctors",
                            //     element: <DoctorsPage />,
                            // },

                            // {
                            //     path: "appointments",
                            //     element: <AppointmentsPage />,
                            // },

                            // {
                            //     path: "settings",
                            //     element: <SettingsPage />,
                            // },
                        ],
                    },
                ],
            },
        ],
    },

    // ======================================
    // Future Patient Portal
    // ======================================

    // {
    //     path: "patient",
    //     children: [
    //         {
    //             element: <PublicRoute />,
    //             children: [
    //                 {
    //                     path: "login",
    //                     element: <PatientLoginPage />,
    //                 },
    //             ],
    //         },
    //         {
    //             element: <ProtectedRoute />,
    //             children: [
    //                 {
    //                     element: <PatientLayout />,
    //                     children: [
    //                         {
    //                             path: "dashboard",
    //                             element: <PatientDashboardPage />,
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ],
    // },

    {
        path: "*",
        element: <NotFoundPage />,
    },
];

export default routes;