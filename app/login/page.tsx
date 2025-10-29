'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup
    alert(isLogin ? 'Login successful!' : 'Account created successfully!');
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-4 text-center font-semibold transition ${
                    isLogin
                      ? 'text-primary border-b-2 border-primary bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-4 text-center font-semibold transition ${
                    !isLogin
                      ? 'text-primary border-b-2 border-primary bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your password"
                    />
                  </div>

                  {isLogin && (
                    <div className="flex justify-between items-center">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                  )}

                  <button type="submit" className="btn-primary w-full py-3">
                    {isLogin ? 'Login' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center px-4 py-2 border rounded hover:bg-gray-50 transition">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                      </svg>
                      Google
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border rounded hover:bg-gray-50 transition">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <p className="mt-6 text-center text-sm text-gray-600">
                    New to Flipkart Clone?{' '}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-primary hover:underline font-semibold"
                    >
                      Create an account
                    </button>
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">Benefits of Signing Up</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Track your orders easily</li>
                <li>✓ Save your wishlist</li>
                <li>✓ Get exclusive offers and deals</li>
                <li>✓ Faster checkout experience</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
