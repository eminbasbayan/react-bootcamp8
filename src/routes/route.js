import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';
import AuthLayout from '../layouts/AuthLayout';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/products',
        Component: ProductsPage,
      },
      {
        path: '/cart',
        Component: CartPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
    ],
  },
]);


export default router