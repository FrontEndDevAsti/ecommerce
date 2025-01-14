import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-gradient text-white py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">EcommerceHub</h3>
          <p>123 E-commerce Street</p>
          <p>Mumbai, Maharashtra 400001</p>
          <p>Phone: +91 1234567890</p>
          <p>Email: info@ecommercehub.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-gray-300 transition-colors">Products</Link></li>
            <li><Link href="/cart" className="hover:text-gray-300 transition-colors">Cart</Link></li>
            <li><Link href="/profile" className="hover:text-gray-300 transition-colors">My Account</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Policies</h3>
          <ul className="space-y-2">
            <li><Link href="/policies/terms" className="hover:text-gray-300 transition-colors">Terms and Conditions</Link></li>
            <li><Link href="/policies/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-gray-300 transition-colors">Shipping Policy</Link></li>
            <li><Link href="/policies/refund" className="hover:text-gray-300 transition-colors">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 EcommerceHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

