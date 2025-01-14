import Link from 'next/link'
import { products } from '../lib/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

