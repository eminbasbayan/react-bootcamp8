import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md py-4 sticky top-0">
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
          <button className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg">
            <span>Sepet</span>
            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
