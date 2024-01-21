import { NavLink } from "react-router-dom";
import './DashboardSidebar.css'

const DashboardSidebar = () => {
    return (
        <div className="flex flex-col gap-2">
            <NavLink >Dashboard</NavLink>
            <NavLink to="/dashboard/upload-book">Upload Book</NavLink>
            <NavLink to="/dashboard/edit-book">Update Book</NavLink>
            <NavLink>Update Book</NavLink>
        </div>
    );
};

export default DashboardSidebar;