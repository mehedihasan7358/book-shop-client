import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/home";
import BookDetails from "../pages/BookDetails/BookDetails";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import UpdateBook from "../Dashboard/UpdateBook";
import DeleteBook from "../Dashboard/DeleteBook";
import Profile from "../Dashboard/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: '/book/:id',
                element: <BookDetails></BookDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/upload-book',
                element: <UploadBook></UploadBook>
            },
            {
                path: '/dashboard/edit-book',
                element: <UpdateBook></UpdateBook>
            },
            {
                path: '/dashboard/book-delete',
                element: <DeleteBook></DeleteBook>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            }
        ]
    }
]);

export default router;