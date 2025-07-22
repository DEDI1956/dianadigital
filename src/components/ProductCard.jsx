import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
        <p className="text-primary font-bold mt-2">{formatRupiah(product.price)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
          Beli
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
