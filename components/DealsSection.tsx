'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products, dealsOfTheDay } from '@/data/products';

export default function DealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endTime = dealsOfTheDay[0]?.endTime.getTime() || now;
      const distance = endTime - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dealProducts = dealsOfTheDay
    .map((deal) => products.find((p) => p.id === deal.productId))
    .filter(Boolean);

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Deals of the Day</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Ends in:</span>
            <div className="flex space-x-2">
              <div className="bg-gray-100 px-3 py-2 rounded text-center">
                <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500">Hours</div>
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded text-center">
                <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500">Mins</div>
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded text-center">
                <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500">Secs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
