'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, reviews } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <a href="/products" className="btn-primary">
              Continue Shopping
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const buyNow = () => {
    alert('Redirecting to checkout...');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-6">
        <div className="container-custom">
          {/* Product Info Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div>
                <div className="bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center h-96">
                  <div className="text-gray-400">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-gray-100 rounded p-2 border-2 ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <div className="aspect-square flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">
                  Brand: <span className="text-primary cursor-pointer hover:underline">{product.brand}</span>
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-success text-white text-sm font-bold px-2 py-1 rounded">
                    <span>{product.rating}</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 ml-2">
                    {product.reviewCount.toLocaleString()} ratings & reviews
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-3xl font-bold">₹{product.finalPrice.toLocaleString()}</span>
                    {product.discount > 0 && (
                      <>
                        <span className="text-xl text-gray-500 line-through">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-success font-semibold">{product.discount}% off</span>
                      </>
                    )}
                  </div>
                  {product.discount > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      Save ₹{(product.price - product.finalPrice).toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Stock Status */}
                <div className="mb-6">
                  {product.stock > 0 ? (
                    <p className="text-success font-semibold">In Stock ({product.stock} available)</p>
                  ) : (
                    <p className="text-red-500 font-semibold">Out of Stock</p>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Quantity:</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={addToCart}
                    disabled={product.stock === 0}
                    className="flex-1 btn-secondary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={buyNow}
                    disabled={product.stock === 0}
                    className="flex-1 btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-4 border-t pt-4">
                  <span className="text-sm text-gray-600">Share:</span>
                  <button className="text-gray-600 hover:text-primary">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-primary">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-success">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            {/* Tab Headers */}
            <div className="flex space-x-8 border-b mb-6">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-3 px-2 font-medium transition ${
                  activeTab === 'description'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-3 px-2 font-medium transition ${
                  activeTab === 'specifications'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 px-2 font-medium transition ${
                  activeTab === 'reviews'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Reviews ({productReviews.length})
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b">
                        <td className="py-3 font-medium text-gray-700 w-1/3">{key}</td>
                        <td className="py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                {productReviews.length > 0 ? (
                  <div className="space-y-6">
                    {productReviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-lg font-bold text-gray-600">
                                {review.userName.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold">{review.userName}</p>
                              {review.verified && (
                                <p className="text-xs text-success">✓ Verified Purchase</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center bg-success text-white text-sm px-2 py-1 rounded">
                            <span>{review.rating}</span>
                            <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{review.title}</h4>
                        <p className="text-gray-700 mb-2">{review.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{review.date}</span>
                          <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-primary">
                              👍 Helpful ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {similarProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
