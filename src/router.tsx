import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './components/layout/Footer/AboutPage';
import VendorsPage from './pages/Vendors/VendorsPage';
import PlanYourWedding from './pages/PlanYourWedding/PlanYourWedding';
import Favorites from './pages/Favorites/Favorites';
import SignIn from './pages/SignIn/SignIn';
import JoinNow from './pages/JoinNow/JoinNow';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Privacy from './components/layout/Footer/Privacy';
import Terms from './components/layout/Footer/Terms';
import YourPrivacyChoices from './components/layout/Footer/YourPrivacyChoices';
import WebAccessibility from './components/layout/Footer/WebAccessibility';
import ComponentsPage from './pages/Components/ComponentsPage';

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
      {
        path: 'components',
        element: <ComponentsPage />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'your-privacy-choices',
        element: <YourPrivacyChoices />,
      },
      {
        path: 'web-accessibility',
        element: <WebAccessibility />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
