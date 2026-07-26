import PageTitle from "@/shared/components/PageTitle";

import useAuthStore from "../../auth/store/authStore";

function DashboardPage() {

    const auth = useAuthStore();

    console.log('---- from dash')
    console.log(auth);
    console.log('======');


    return (
        <>
            <PageTitle
                title="dashboard:title"
                description="dashboard:description"
            />

            Dashboard
        </>
    );
}

export default DashboardPage;