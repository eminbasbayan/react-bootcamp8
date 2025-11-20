import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/authSlice';
import { signOut } from 'firebase/auth';
import { auth as firebaseAuth } from '../../firebase';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const value = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  async function handleLogout() {
    if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      try {
        await signOut(firebaseAuth);
        dispatch(clearUser());
        toast(
          'Başarıyla çıkış yapıldı. Login sayfasına yönlendiriliyorsunuz...'
        );
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      } catch (error) {
        console.error('Logout error:', error);
      }
    } else {
      toast('Çıkış işlemi iptal edildi.');
    }
  }

  const getUserInitial = () => {
    if (auth.user?.email) {
      return auth.user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? 'text-teal-400 bg-gray-700'
        : 'text-white hover:text-teal-400 hover:bg-gray-700'
    }`;

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold">
              <span className="text-teal-400 group-hover:text-teal-300 transition-colors">
                Shop
              </span>
              <span className="group-hover:text-gray-200 transition-colors">
                Logo
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass}>
              Ana Sayfa
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Ürünler
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Hakkımızda
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              İletişim
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Sepet Butonu */}
            <button
              className="relative flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
              onClick={() => navigate('/cart')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="font-medium">Sepet</span>
              {value.cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                  {value.cartItems.length}
                </span>
              )}
            </button>

            {/* Auth Buttons */}
            {auth.user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold">
                    {getUserInitial()}
                  </div>
                  <span className="max-w-[150px] truncate text-sm">
                    {auth.user.email}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      userMenuOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-700">
                    <button
                      onClick={() => {
                        navigate('/profile');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors flex items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Profilim</span>
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-red-600 transition-colors text-red-400 hover:text-white flex items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Çıkış Yap</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                  onClick={() => navigate('/auth/login')}
                >
                  Giriş Yap
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                  onClick={() => navigate('/auth/register')}
                >
                  Kayıt Ol
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Sepet Badge */}
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2 text-teal-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {value.cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {value.cartItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </NavLink>
              <NavLink
                to="/products"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ürünler
              </NavLink>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </NavLink>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </NavLink>
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
              {auth.user ? (
                <>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold">
                      {getUserInitial()}
                    </div>
                    <span className="text-sm truncate">{auth.user.email}</span>
                  </div>
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                  >
                    Profilim
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                  >
                    Çıkış Yap
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/auth/login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => {
                      navigate('/auth/register');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                  >
                    Kayıt Ol
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
