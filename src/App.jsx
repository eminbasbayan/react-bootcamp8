import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { initAuthListener } from './utils/authListener';
import store from './redux/store';
import router from './routes/route';




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
