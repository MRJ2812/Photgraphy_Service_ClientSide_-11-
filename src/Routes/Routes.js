import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Premium from "../Pages/Premium";
import PrivateRouter from "./PrivateRouter";
import MyReview from "../Pages/MyReview";
import Services from "../Pages/Services";
import Checkout from "../Pages/Checkout";
import AddService from "../Pages/AddService";
import UpdateReview from "../Pages/UpdateReview";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://server-weld-eta.vercel.app/3services')
            },
            {
                path: '/sevices',
                element: <Services></Services>,
                loader: () => fetch('https://server-weld-eta.vercel.app/services')
            },
            {
                path: '/sevices/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://server-weld-eta.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/MyReview',
                element: <PrivateRouter><MyReview></MyReview> </PrivateRouter>
            },
            {
                path: '/MyReview/:id',
                // loader: ({ params }) => fetch(`https://code-course-server.vercel.app/premium/${params.id}`),
                element: <PrivateRouter><MyReview></MyReview> </PrivateRouter>
            },
            {
                path: '/servicereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => { return fetch(`https://server-weld-eta.vercel.app/servicereview/${params.id}`) }
            }

        ]
    },
    {
        path: '/*',
        element: "Sorry! Page Not Found"
    }

])