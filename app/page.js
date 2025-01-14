import Link from 'next/link'
import Image from 'next/image'
import { products } from './lib/products'
import { Eye, ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-12 md:py-20 bg-black text-white rounded-lg mb-12" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to EcommerceHub</h1>
        <p className="text-lg md:text-xl mb-8">Discover amazing products at unbeatable prices!</p>
        <Link href="/products" className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-gray-200 transition-colors text-base md:text-lg font-semibold inline-flex items-center">
          <ShoppingCart size={20} className="mr-2" />
          Shop Now
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" data-aos="fade-up">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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
      </section>
    </div>
  )
}

