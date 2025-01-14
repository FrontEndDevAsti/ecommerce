'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getProductById } from '../../lib/products'
import { toast } from 'sonner'
import { ShoppingCart, Star } from 'lucide-react'

export default function ProductDetails({ params }) {
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchedProduct = getProductById(params.id)
    setProduct(fetchedProduct)
  }, [params.id])

  if (!product) {
    return <div>Loading...</div>
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ ...product, quantity })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    toast.success('Product added to cart successfully!')
    window.dispatchEvent(new Event('cartUpdate'))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6" data-aos="fade-right">
            <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 p-6" data-aos="fade-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={20} fill={i < 4 ? "currentColor" : "none"} />
              ))}
              <span className="ml-2 text-gray-600">(4.0)</span>
            </div>
            <p className="text-xl md:text-2xl font-bold mb-4 text-black">₹{product.price.toLocaleString()}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Key Features:</h2>
              <ul className="list-disc list-inside">
                <li>High-quality materials</li>
                <li>Durable construction</li>
                <li>Sleek and modern design</li>
                <li>1-year warranty</li>
              </ul>
            </div>
            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="mr-4">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 px-2 py-1 border rounded"
              />
            </div>
            <button onClick={addToCart} className="btn-primary flex items-center justify-center w-full md:w-auto" data-aos="zoom-in">
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

