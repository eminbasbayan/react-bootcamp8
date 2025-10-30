import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/authSlice';
import { signOut } from 'firebase/auth';
import { auth as firebaseAuth } from '../../firebase';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  // const value = useContext(CartContext);
  const value = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  async function handleLogout() {
    if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      try {
        await signOut(firebaseAuth);
        dispatch(clearUser());
        toast(
          'Başarıyla çıkış yapıldı. Login sayfasına yönlendiriliyorsunuz...'
        );
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        console.error('Logout error:', error);
      }
    } else {
      toast('Çıkış işlemi iptal edildi.');
    }
  }

  return (
    <header className="bg-gray-800 text-white shadow-md py-4 sticky top-0 z-[99]">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <span className="text-teal-400">Shop</span>Logo
        </div>

        {/* Navigation Menüsü */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-teal-400">
            Home
          </Link>
          <Link to="/products" className="hover:text-teal-400">
            Products
          </Link>
          <Link to="/about" className="hover:text-teal-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-teal-400">
            Contact
          </Link>
        </nav>

        {/* Sepet Butonu */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg"
            onClick={() => navigate('/cart')}
          >
            <span>Sepet</span>
            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {value.cartItems.length}
            </span>
          </button>
        </div>

        {auth.user ? (
          <div className="profile">
            <button
              className="ml-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg"
              onClick={() => navigate('/profile')}
            >
              Profil: {auth.user.email}
            </button>
            <button
              className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              onClick={handleLogout}
            >
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div className="auth">
            <button
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={() => navigate('/login')}
            >
              Giriş Yap
            </button>
            <button
              className="ml-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              onClick={() => navigate('/register')}
            >
              Kayıt Ol
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
