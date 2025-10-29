'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [recentSearches] = useState(['iPhone', 'Samsung Galaxy', 'Laptop', 'Headphones']);

  useEffect(() => {
    if (query) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          {query ? (
            <>
              <h1 className="text-2xl font-bold mb-6">
                Search Results for "{query}"
              </h1>
              {searchResults.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-4">
                    Showing {searchResults.length} results
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {searchResults.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <p className="text-gray-600 text-lg mb-4">
                    No results found for "{query}"
                  </p>
                  <p className="text-gray-500 mb-6">
                    Try different keywords or browse our categories
                  </p>
                  <a href="/products" className="btn-primary inline-block px-8 py-3">
                    Browse All Products
                  </a>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <a
                    key={index}
                    href={`/search?q=${encodeURIComponent(search)}`}
                    className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  >
                    {search}
                  </a>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-8 mb-4">Trending Searches</h2>
              <div className="flex flex-wrap gap-2">
                {['Smartphones', 'Laptops', 'Fashion', 'Home Appliances'].map((trend, index) => (
                  <a
                    key={index}
                    href={`/search?q=${encodeURIComponent(trend)}`}
                    className="px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-full hover:bg-opacity-20 transition"
                  >
                    {trend}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
