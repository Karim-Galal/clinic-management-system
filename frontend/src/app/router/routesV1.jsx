import { Navigate } from "react-router-dom";

import StaffLayout from "@/layouts/StaffLayout";

import LoginPage from "@/features/auth/pages/LoginPage";
import NotFoundPage from "@/features/not-found/pages/NotFoundPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

const routes = [
  {
    path: "/",
    element: <Navigate to="/staff/login" replace />,
  },

  {
    path: "staff",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //     path: "register",
      //     element: <RegisterPage />,
      // },
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

  // {
  //     path: "patient",
  //     children: [
  //         {
  //             path: "login",
  //             element: <PatientLoginPage />,
  //         },
  //         {
  //             path: "dashboard",
  //             element: <PatientDashboardPage />,
  //         },
  //         {
  //             path: "appointments",
  //             element: <PatientAppointmentsPage />,
  //         },
  //         {
  //             path: "profile",
  //             element: <PatientProfilePage />,
  //         },
  //     ],
  // },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;