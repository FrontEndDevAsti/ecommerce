'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { getProductById } from '../../lib/products'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">₹{product.price.toLocaleString()}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

