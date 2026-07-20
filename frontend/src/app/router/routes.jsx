import LoginPage from "@/features/auth/pages/LoginPage";
import NotFoundPage from "@/features/not-found/pages/NotFoundPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

const routes = [
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },


    
    {
      path: "*", 
      element: <NotFoundPage/> 
    }
];

export default routes;