'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Filters from '@/components/Filters';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category from URL
    if (categoryParam) {
      filtered = filtered.filter((p) => p.category === categoryParam);
    }

    setFilteredProducts(filtered);
  }, [categoryParam]);

  const handleFilterChange = (filters: any) => {
    let filtered = [...products];

    // Category filter
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter((p) => filters.categories.includes(p.category));
    } else if (categoryParam) {
      filtered = filtered.filter((p) => p.category === categoryParam);
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(
        (p) => p.finalPrice >= filters.priceRange[0] && p.finalPrice <= filters.priceRange[1]
      );
    }

    // Brand filter
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((p) => filters.brands.includes(p.brand));
    }

    // Rating filter
    if (filters.rating) {
      filtered = filtered.filter((p) => p.rating >= filters.rating);
    }

    // Discount filter
    if (filters.discount) {
      filtered = filtered.filter((p) => p.discount >= filters.discount);
    }

    // Stock filter
    if (filters.inStock !== null && filters.inStock !== undefined) {
      filtered = filtered.filter((p) =>
        filters.inStock ? p.stock > 0 : p.stock === 0
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];

    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.finalPrice - b.finalPrice);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.finalPrice - a.finalPrice);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(sorted);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <aside className="w-64 flex-shrink-0 hidden lg:block">
              <Filters onFilterChange={handleFilterChange} />
            </aside>

            {/* Products Section */}
            <div className="flex-1">
              {/* Sort and Results Count */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} results
                </p>
                <div className="flex items-center space-x-4">
                  <label className="text-sm text-gray-600">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 border rounded ${
                        currentPage === page
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Items per page */}
              <div className="mt-4 flex justify-center items-center space-x-2">
                <label className="text-sm text-gray-600">Items per page:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
