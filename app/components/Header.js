'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingCart, User, LogOut, Menu, X, LogIn, UserPlus } from 'lucide-react'
import { toast } from 'sonner'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn') === 'true'
      setIsLoggedIn(loginStatus)
    }

    const handleStorageChange = () => {
      checkLoginStatus()
      updateCartCount()
    }

    checkLoginStatus()
    updateCartCount()

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cartUpdate', handleStorageChange)
    window.addEventListener('login', checkLoginStatus)
    window.addEventListener('logout', checkLoginStatus)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdate', handleStorageChange)
      window.removeEventListener('login', checkLoginStatus)
      window.removeEventListener('logout', checkLoginStatus)
    }
  }, [])

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0))
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    toast.success('Logged out successfully!')
    router.push('/')
    window.dispatchEvent(new Event('logout'))
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header-gradient text-white mb-4">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-white">EcommerceHub</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-black p-4 z-50' : 'hidden md:flex'}`}>
          <li><Link href="/products" className="text-white hover:underline">Products</Link></li>
          <li className="relative">
            <Link href="/cart" className="text-white hover:underline">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li><Link href="/profile" className="text-white hover:underline"><User size={24} /></Link></li>
              <li>
                <button 
                  onClick={handleLogout} 
                  className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center"
                  data-aos="fade-left"
                >
                  <LogOut size={20} className="mr-2" />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link 
                  href="/login" 
                  className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center"
                  data-aos="fade-left"
                >
                  <LogIn size={20} className="mr-2" />
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  href="/signup" 
                  className="bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-gray-400 transition-colors flex items-center"
                  data-aos="fade-left"
                >
                  <UserPlus size={20} className="mr-2" />
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

