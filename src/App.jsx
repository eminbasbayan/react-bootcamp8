import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
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
    path: '/register',
    Component: RegisterPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

function App() {
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
