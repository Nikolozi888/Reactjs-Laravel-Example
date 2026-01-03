import { Link } from '@inertiajs/react';

export default function Show({ product }) {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>

      <div className="border p-4 rounded space-y-2">
        <p>
          <strong>Name:</strong> {product.name}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
      </div>

      <Link
        href="/"
        className="inline-block mt-4 text-blue-600 underline"
      >
        ← Back to Products
      </Link>
    </div>
  );
}
