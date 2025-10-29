'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-white text-2xl font-bold">
              Flipkart
            </div>
            <div className="text-yellow-300 text-xs italic">
              Explore <span className="text-white">Plus</span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-primary hover:text-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-6">
            {/* Login/Account */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="text-white font-medium hover:bg-blue-700 px-4 py-2 rounded-sm flex items-center space-x-1"
              >
                <span>Login</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-sm shadow-lg py-2 z-50">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Login & Signup
                  </Link>
                  <Link
                    href="/account/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Orders
                  </Link>
                  <Link
                    href="/account/wishlist"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Wishlist
                  </Link>
                  <Link
                    href="/account/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/account/notifications"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Notifications
                  </Link>
                </div>
              )}
            </div>

            {/* Become a Seller */}
            <Link
              href="/seller"
              className="text-white font-medium hover:bg-blue-700 px-4 py-2 rounded-sm"
            >
              Become a Seller
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="text-white font-medium hover:bg-blue-700 px-4 py-2 rounded-sm flex items-center space-x-2"
            >
              <svg
                className="w-6 h-6"
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
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white border-t">
        <div className="container-custom">
          <div className="flex items-center space-x-8 py-2 text-sm overflow-x-auto">
            <Link href="/products?category=electronics" className="hover:text-primary whitespace-nowrap">
              Electronics
            </Link>
            <Link href="/products?category=fashion" className="hover:text-primary whitespace-nowrap">
              Fashion
            </Link>
            <Link href="/products?category=home" className="hover:text-primary whitespace-nowrap">
              Home & Kitchen
            </Link>
            <Link href="/products?category=books" className="hover:text-primary whitespace-nowrap">
              Books
            </Link>
            <Link href="/products?category=toys" className="hover:text-primary whitespace-nowrap">
              Toys
            </Link>
            <Link href="/products?category=sports" className="hover:text-primary whitespace-nowrap">
              Sports
            </Link>
            <Link href="/products?category=beauty" className="hover:text-primary whitespace-nowrap">
              Beauty
            </Link>
            <Link href="/products?category=grocery" className="hover:text-primary whitespace-nowrap">
              Grocery
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
