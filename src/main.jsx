import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './context/CartContext';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </ReduxProvider>
);
