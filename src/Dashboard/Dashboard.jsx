import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
    return (
        <div className="mx-4 lg:mx-24">
            <div className="flex justify-start gap-6">
                <div>
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;