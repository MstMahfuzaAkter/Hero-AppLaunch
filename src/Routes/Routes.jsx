import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppsDetails";
import Apps from "../Pages/Apps";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading.....</p>,
    children:[
        {
            index:true,
            // loader:()=>fetch('/data.json'),
            Component:Home,
            
        },
        {
            path:'/apps',
            element:<Apps></Apps>
        },
        {
            path:'/installation',
            element:<Installation></Installation>
        },
        {
            path:'/apps/:id',
            element:<AppDetails></AppDetails>
        }
    ]
  },
]);
export default router;