import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>This is navbar</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;