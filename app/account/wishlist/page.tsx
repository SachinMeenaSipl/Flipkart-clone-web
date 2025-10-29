'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    products[0],
    products[3],
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background py-12">
          <div className="container-custom text-center">
            <div className="bg-white rounded-lg shadow-sm p-12">
              <div className="text-gray-400 mb-6">
                <svg
                  className="w-24 h-24 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-6">
                Save items you like to your wishlist
              </p>
              <a href="/products" className="btn-primary inline-block px-8 py-3">
                Continue Shopping
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Wishlist ({wishlistItems.length})</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wishlistItems.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 z-10"
                >
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
