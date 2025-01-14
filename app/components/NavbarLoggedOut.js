import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function NavbarLoggedOut({ cartCount }) {
  return (
    <ul className="flex space-x-4 items-center">
      <li><Link href="/products" className="hover:underline">Products</Link></li>
      <li className="relative">
        <Link href="/cart" className="hover:underline">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </li>
      <li><Link href="/login" className="btn-secondary br-2">Login</Link></li>
      <li><Link href="/signup" className="btn-primary br-2">Sign Up</Link></li>
    </ul>
  )
}

