'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus } from 'lucide-react'
import { toast } from 'sonner'

export default function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(storedCart)
  }, [])

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('storage'))
    toast.success('Item removed from cart')
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('storage'))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4 text-muted-foreground">Your cart is empty.</p>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center bg-card p-4 rounded-lg shadow-md">
                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-card-foreground">{item.name}</h2>
                  <p className="text-muted-foreground">₹{item.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-secondary text-secondary-foreground p-1 rounded-full"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="mx-2 text-card-foreground">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-secondary text-secondary-foreground p-1 rounded-full"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-destructive hover:text-destructive/80"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-card p-4 rounded-lg shadow-md">
            <p className="text-xl font-bold text-card-foreground">Total: ₹{total.toLocaleString()}</p>
            <Link href="/checkout" className="btn-primary block w-full text-center mt-4">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

