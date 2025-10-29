'use client';

import { useState } from 'react';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedDiscount, setSelectedDiscount] = useState<number | null>(null);
  const [inStock, setInStock] = useState<boolean | null>(null);

  const categories = ['electronics', 'fashion', 'home', 'books', 'toys', 'sports', 'beauty', 'grocery'];
  const brands = ['Apple', 'Samsung', 'Dell', 'Sony', 'Levi\'s', 'Adidas', 'Prestige', 'Borosil'];
  const ratings = [4, 3, 2, 1];
  const discounts = [50, 40, 30, 20, 10];

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    applyFilters({ categories: newCategories });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
    applyFilters({ brands: newBrands });
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    applyFilters({ rating });
  };

  const handleDiscountChange = (discount: number) => {
    setSelectedDiscount(discount);
    applyFilters({ discount });
  };

  const handleStockChange = (stock: boolean) => {
    setInStock(stock);
    applyFilters({ inStock: stock });
  };

  const applyFilters = (newFilters: any) => {
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      brands: selectedBrands,
      rating: selectedRating,
      discount: selectedDiscount,
      inStock,
      ...newFilters,
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200000]);
    setSelectedBrands([]);
    setSelectedRating(null);
    setSelectedDiscount(null);
    setInStock(null);
    onFilterChange({});
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      {/* Clear Filters */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b">
        <h3 className="font-bold text-lg">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-primary hover:underline text-sm"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <span className="text-sm capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 pb-6 border-b">
        <h4 className="font-semibold mb-3">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="200000"
            value={priceRange[1]}
            onChange={(e) => {
              const newRange = [0, parseInt(e.target.value)];
              setPriceRange(newRange);
              applyFilters({ priceRange: newRange });
            }}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>₹0</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6 pb-6 border-b">
        <h4 className="font-semibold mb-3">Brands</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="mr-2"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6 pb-6 border-b">
        <h4 className="font-semibold mb-3">Customer Rating</h4>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="mr-2"
              />
              <span className="text-sm">{rating}★ & above</span>
            </label>
          ))}
        </div>
      </div>

      {/* Discount */}
      <div className="mb-6 pb-6 border-b">
        <h4 className="font-semibold mb-3">Discount</h4>
        <div className="space-y-2">
          {discounts.map((discount) => (
            <label key={discount} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="discount"
                checked={selectedDiscount === discount}
                onChange={() => handleDiscountChange(discount)}
                className="mr-2"
              />
              <span className="text-sm">{discount}% or more</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Availability</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="stock"
              checked={inStock === true}
              onChange={() => handleStockChange(true)}
              className="mr-2"
            />
            <span className="text-sm">In Stock</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="stock"
              checked={inStock === false}
              onChange={() => handleStockChange(false)}
              className="mr-2"
            />
            <span className="text-sm">Out of Stock</span>
          </label>
        </div>
      </div>
    </div>
  );
}
