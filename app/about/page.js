import Image from 'next/image'
import { ShoppingBag, Truck, HeadphonesIcon as HeadphonesMic, Users } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About EcommerceHub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image 
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Ecommerce Warehouse" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, EcommerceHub started with a simple mission: to make online shopping accessible, enjoyable, and reliable for everyone. What began as a small startup has now grown into a trusted e-commerce platform, serving thousands of customers across the country.
          </p>
          <p className="text-gray-600">
            Our team of dedicated professionals works tirelessly to bring you the best products at competitive prices, all while ensuring a smooth and secure shopping experience.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="text-center">
          <ShoppingBag size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">Thousands of products across multiple categories</p>
        </div>
        <div className="text-center">
          <Truck size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
        </div>
        <div className="text-center">
          <HeadphonesMic size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Always here to help with any questions or concerns</p>
        </div>
        <div className="text-center">
          <Users size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600">Join our growing community of satisfied customers</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="John Doe" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
              alt="Jane Smith" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">COO</p>
          </div>
          <div className="text-center">
            <Image 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Mike Johnson" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Mike Johnson</h3>
            <p className="text-gray-600">CTO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

