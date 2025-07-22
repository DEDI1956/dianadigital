import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          DIANA STORE
        </Link>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none leading-normal focus:outline-none focus:bg-white focus:border-primary"
            placeholder="Cari produk..."
          />
        </div>
        <Link to="/cart" className="relative text-gray-700 hover:text-primary">
          <FiShoppingCart size={24} />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
