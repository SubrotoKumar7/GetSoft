import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import App from "../pages/app/App";
import Installed from "../pages/installed/Installed";
import Details from "../pages/details/Details";
import InvalidPath from "../components/InvalidPath/InvalidPath";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: ()=> fetch('/appsData.json'),
                Component: Home
            },
            {
                path: '/apps',
                loader: ()=> fetch('/appsData.json'),
                Component: App
            },
            {
                path: '/installed',
                Component: Installed
            },
            {
                path: '/details/:id',
                loader: ()=> fetch('/appsData.json'),
                Component: Details
            },
            {
                path: '*',
                Component: InvalidPath
            }
        ]
    }
])

export default router;