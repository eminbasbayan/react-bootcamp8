import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Layout/Header';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/products',
    Component: ProductsPage,
  },
]);

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
