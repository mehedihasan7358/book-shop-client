import { NavLink } from "react-router-dom";
import './DashboardSidebar.css'
import { CgProfile } from "react-icons/cg";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const DashboardSidebar = () => {
    return (
        <div className="bg-slate-200 h-screen pl-4 pr-10 flex flex-col justify-between">
            <div className="flex flex-col gap-2 text-lg  mt-16">
                <p className="text-2xl font-bold mt-2">ড্যাশবোর্ড</p>
                <NavLink to="/dashboard/profile" className='py-1 px-3 flex gap-2'> <CgProfile className="text-2xl" /> <p>প্রফাইল</p></NavLink>
                <NavLink to="/dashboard/upload-book" className='py-1 px-3 flex gap-2 text-2xl'><MdOutlineFileUpload /><p className="text-base">আপলোড বই</p></NavLink>
                <NavLink to="/dashboard/edit-book" className='py-1 px-3 flex gap-2 text-2xl'><RiEditBoxLine /><p className="text-base">আপডেট বই</p></NavLink>
                <NavLink to='/dashboard/book-delete' className='py-1 px-3 flex item-center gap-2 text-2xl'><AiOutlineDelete /><p className="text-base">ডিলিট বই</p></NavLink>
            </div>
            <div>
                <NavLink to='/dashboard/sing-out' className='py-1 px-3 flex gap-2 text-2xl'><BiLogOutCircle /><p className="text-base">লগ আউট</p></NavLink>
            </div>
        </div>
    );
};

export default DashboardSidebar;