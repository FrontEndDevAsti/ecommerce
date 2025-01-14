import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h2>
        <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
          <Link href={`/product/${product.id}`} className="btn-primary flex items-center justify-center">
            <Eye className="mr-2" size={16} />
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

