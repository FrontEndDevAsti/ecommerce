import Link from 'next/link'
import { ShoppingCart, User, LogOut } from 'lucide-react'

export default function NavbarLoggedIn({ cartCount, handleLogout }) {
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
      <li><Link href="/profile" className="hover:underline"><User size={24} /></Link></li>
      <li><button onClick={handleLogout} className="btn-secondary flex items-center"><LogOut size={20} className="mr-2" />Logout</button></li>
    </ul>
  )
}

