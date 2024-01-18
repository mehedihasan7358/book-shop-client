import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/home";
import BookDetails from "../pages/BookDetails/BookDetails";

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
]);

export default router;