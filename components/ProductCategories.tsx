'use client';

import Link from 'next/link';
import { categories } from '@/data/products';

export default function ProductCategories() {
  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="card-hover bg-white border rounded-lg p-6 text-center cursor-pointer"
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="font-medium text-sm">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
