import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-primary font-bold my-4">{formatRupiah(product.price)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
