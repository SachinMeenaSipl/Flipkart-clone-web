'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrdersPage() {
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      total: 135915,
      status: 'Delivered',
      items: [
        { name: 'iPhone 15 Pro Max (256 GB)', quantity: 1, price: 135915 },
      ],
      deliveryDate: '2024-01-18',
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      total: 4199,
      status: 'Shipped',
      items: [
        { name: 'Adidas Women\'s Running Shoes', quantity: 1, price: 4199 },
      ],
      deliveryDate: '2024-01-16',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-success';
      case 'Shipped':
        return 'text-primary';
      case 'Cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          <h1 className="text-2xl font-bold mb-6">My Orders</h1>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Order #{order.id}</h3>
                    <p className="text-gray-600 text-sm">Placed on {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </p>
                    {order.status === 'Shipped' && (
                      <p className="text-sm text-gray-600">
                        Expected by {order.deliveryDate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">₹{item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t mt-4 pt-4 flex justify-between items-center">
                  <div className="text-lg font-bold">
                    Total: ₹{order.total.toLocaleString()}
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 border rounded hover:bg-gray-100">
                      Track Order
                    </button>
                    {order.status === 'Delivered' && (
                      <button className="px-4 py-2 border rounded hover:bg-gray-100">
                        Review Product
                      </button>
                    )}
                    <button className="px-4 py-2 border rounded hover:bg-gray-100">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
