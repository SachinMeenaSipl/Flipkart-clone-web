'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  finalPrice: number;
  price: number;
  discount: number;
  rating: number;
  reviewCount: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement cart functionality
    alert('Added to cart!');
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="card-hover bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
        {/* Product Image */}
        <div className="relative bg-gray-100 h-48 flex items-center justify-center p-4">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {/* Placeholder for image */}
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Discount Badge */}
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-success text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <svg
              className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`}
              fill={isWishlisted ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-success text-white text-xs font-bold px-2 py-1 rounded">
              <span>{product.rating}</span>
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-xs text-gray-500 ml-2">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-3">
            <span className="text-xl font-bold text-gray-900">
              ₹{product.finalPrice.toLocaleString()}
            </span>
            {product.discount > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-sm text-success font-medium ml-2">
                  {product.discount}% off
                </span>
              </>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="btn-primary w-full py-2 text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
