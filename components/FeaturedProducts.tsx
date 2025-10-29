'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<'trending' | 'offers' | 'bestsellers'>('trending');

  // Get different product sets based on criteria
  const trendingProducts = products.slice(0, 4);
  const topOffers = products.filter((p) => p.discount >= 20).slice(0, 4);
  const bestSellers = products.filter((p) => p.reviewCount > 1000).slice(0, 4);

  const getProducts = () => {
    switch (activeTab) {
      case 'trending':
        return trendingProducts;
      case 'offers':
        return topOffers;
      case 'bestsellers':
        return bestSellers;
      default:
        return trendingProducts;
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container-custom">
        {/* Tabs */}
        <div className="flex space-x-8 border-b mb-6">
          <button
            onClick={() => setActiveTab('trending')}
            className={`pb-3 px-2 font-medium transition ${
              activeTab === 'trending'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Trending Products
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            className={`pb-3 px-2 font-medium transition ${
              activeTab === 'offers'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Top Offers
          </button>
          <button
            onClick={() => setActiveTab('bestsellers')}
            className={`pb-3 px-2 font-medium transition ${
              activeTab === 'bestsellers'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Best Sellers
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
