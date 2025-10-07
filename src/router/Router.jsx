import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import App from "../pages/app/App";
import Installed from "../pages/installed/Installed";
import Details from "../pages/details/Details";

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
                Component: App
            },
            {
                path: '/installed',
                Component: Installed
            },
            {
                path: '/details',
                Component: Details
            }
        ]
    }
])

export default router;