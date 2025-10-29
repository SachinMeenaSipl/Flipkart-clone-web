'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max (256 GB)',
      price: 159900,
      finalPrice: 135915,
      quantity: 1,
      image: '/images/phone1.jpg',
    },
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setDiscount(10);
      alert('Coupon applied! 10% discount');
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );
  const couponDiscount = (subtotal * discount) / 100;
  const deliveryCharges = subtotal > 500 ? 0 : 40;
  const total = subtotal - couponDiscount + deliveryCharges;

  if (cartItems.length === 0) {
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Add items to get started
              </p>
              <Link href="/products" className="btn-primary inline-block px-8 py-3">
                Continue Shopping
              </Link>
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
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border-b last:border-b-0"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold">
                          ₹{item.finalPrice.toLocaleString()}
                        </span>
                        {item.price > item.finalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{item.price.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-lg font-bold">
                        ₹{(item.finalPrice * item.quantity).toLocaleString()}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code */}
              <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
                <h3 className="font-semibold mb-3">Apply Coupon</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={applyCoupon}
                    className="btn-primary px-6"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h3 className="font-bold text-lg mb-4">Price Details</h3>
                
                <div className="space-y-3 mb-4 pb-4 border-b">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Price ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                    </span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Coupon Discount ({discount}%)</span>
                      <span>-₹{couponDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Charges</span>
                    <span className={deliveryCharges === 0 ? 'text-success' : ''}>
                      {deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <p className="text-success text-sm mb-4">
                    You will save ₹{couponDiscount.toLocaleString()} on this order
                  </p>
                )}

                <Link href="/checkout" className="btn-primary w-full block text-center py-3">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
