import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import App from "../pages/app/App";
import Installed from "../pages/installed/Installed";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: App
            },
            {
                path: '/installed',
                Component: Installed
            }
        ]
    }
])

export default router;