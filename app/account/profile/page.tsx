'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    gender: 'male',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-gray-600">
                      {formData.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">{formData.name}</h3>
                  <p className="text-gray-600 text-sm">{formData.email}</p>
                </div>

                <nav className="space-y-2">
                  <a
                    href="/account/profile"
                    className="block px-4 py-2 bg-primary bg-opacity-10 text-primary rounded"
                  >
                    Profile Information
                  </a>
                  <a
                    href="/account/orders"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    My Orders
                  </a>
                  <a
                    href="/account/wishlist"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Wishlist
                  </a>
                  <a
                    href="/account/addresses"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    Saved Addresses
                  </a>
                </nav>
              </div>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Personal Information</h2>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-primary hover:underline"
                    >
                      Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-3 mt-6">
                      <button type="submit" className="btn-primary px-6 py-2">
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 border rounded hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </form>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-bold mb-4">Change Password</h3>
                  <button className="text-primary hover:underline">
                    Click here to change password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
