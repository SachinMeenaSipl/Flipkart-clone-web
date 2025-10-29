'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    address: '',
    landmark: '',
    city: '',
    state: '',
    addressType: 'home',
    paymentMethod: 'cod',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Place order
      router.push('/account/orders?orderPlaced=true');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          {/* Progress Steps */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              {['Login', 'Address', 'Order Summary', 'Payment'].map((label, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step > index + 1
                        ? 'bg-success text-white'
                        : step === index + 1
                        ? 'bg-primary text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {step > index + 1 ? '✓' : index + 1}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="font-semibold">{label}</p>
                  </div>
                  {index < 3 && (
                    <div
                      className={`h-1 flex-1 mx-4 ${
                        step > index + 1 ? 'bg-success' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Login or Signup</h2>
                    <p className="text-gray-600 mb-4">
                      You are already logged in as Guest User
                    </p>
                    <button type="button" onClick={() => setStep(2)} className="btn-primary">
                      Continue
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Pincode</label>
                          <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Landmark</label>
                          <input
                            type="text"
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">State</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Address Type</label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="addressType"
                              value="home"
                              checked={formData.addressType === 'home'}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Home</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="addressType"
                              value="work"
                              checked={formData.addressType === 'work'}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Work</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <p className="font-medium">Delivery Address:</p>
                        <p className="text-gray-600">{formData.name}, {formData.phone}</p>
                        <p className="text-gray-600">{formData.address}, {formData.landmark}</p>
                        <p className="text-gray-600">{formData.city}, {formData.state} - {formData.pincode}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Order Items:</p>
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="text-gray-600">1 x iPhone 15 Pro Max (256 GB)</p>
                          <p className="font-bold mt-2">₹1,35,915</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn-primary">
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium">Credit/Debit Card</p>
                          <p className="text-sm text-gray-600">Visa, Mastercard, Rupay</p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium">UPI</p>
                          <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="netbanking"
                          checked={formData.paymentMethod === 'netbanking'}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium">Net Banking</p>
                          <p className="text-sm text-gray-600">All major banks supported</p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium">Cash on Delivery</p>
                          <p className="text-sm text-gray-600">Pay when you receive</p>
                        </div>
                      </label>
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn-primary w-full py-3">
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h3 className="font-bold text-lg mb-4">Price Details</h3>
                <div className="space-y-3 mb-4 pb-4 border-b">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price (1 item)</span>
                    <span>₹1,59,900</span>
                  </div>
                  <div className="flex justify-between text-success">
                    <span>Discount</span>
                    <span>-₹23,985</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Charges</span>
                    <span className="text-success">FREE</span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹1,35,915</span>
                </div>
                <p className="text-success text-sm mt-4">
                  You will save ₹23,985 on this order
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
