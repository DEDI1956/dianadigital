import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, getCartTotal } = useContext(CartContext);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const total = getCartTotal();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Keranjang Belanja</h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-600">Keranjang Anda kosong.</p>
            <Link to="/" className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-green-600">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {cart.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                  <div className="flex-grow">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-primary">{formatRupiah(item.price)}</p>
                    <p className="text-sm text-gray-500">Jumlah: {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-semibold">
                    Hapus
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Ringkasan Belanja</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{formatRupiah(total)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>{formatRupiah(total)}</span>
                </div>
                <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
