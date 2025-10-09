import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppsDetails";
import Apps from "../Pages/Apps";
import ErrorApp from "../Pages/ErrorApp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorApp />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
      {
        path: '/apps/:id',
        element: <AppDetails />,
        errorElement: <ErrorPage />, 
      },
    ],
  },
]);

export default router;