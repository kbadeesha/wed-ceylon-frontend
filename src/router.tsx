import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import MainLayout from "./components/layout/MainLayout/MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
