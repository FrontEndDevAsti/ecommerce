import Link from 'next/link'
import Image from 'next/image'
import { products } from '../lib/products'
import { Eye, ShoppingCart } from 'lucide-react'

export default function Products() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center" data-aos="fade-up">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
            <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg md:text-2xl font-bold text-black">₹{product.price.toLocaleString()}</span>
                <Link 
                  href={`/product/${product.id}`} 
                  className="btn-primary flex items-center justify-center text-sm md:text-base rounded-full hover:scale-105 transition-transform"
                >
                  <Eye className="mr-2" size={16} />
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

