import { Link, Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import Navbar from "../pages/shared/navbar";

const Dashboard = () => {
    return (
        <div className="mx-4 lg:mx-24">
            {/* <Link to="/"><h1 className="text-3xl font-bold my-2">লাইব্রেরী</h1></Link> */}
            <Navbar></Navbar>
            <div className="flex justify-start gap-6">
                <div>
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div className="mt-20">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;