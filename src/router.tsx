import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import VendorsPage from './pages/Vendors/VendorsPage';
import PlanYourWedding from './pages/PlanYourWedding/PlanYourWedding';
import Favorites from './pages/Favorites/Favorites';
import SignIn from './pages/SignIn/SignIn';
import JoinNow from './pages/JoinNow/JoinNow';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import MainLayout from './components/layout/MainLayout/MainLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'vendors',
        element: <VendorsPage />,
      },
      {
        path: 'plan-wedding',
        element: <PlanYourWedding />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'join-now',
        element: <JoinNow />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
