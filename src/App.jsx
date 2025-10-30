import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import { initAuthListener } from './utils/authListener';
import store from './redux/store';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

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

function App() {
  useEffect(() => {
    initAuthListener(store);
  }, []);

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
