'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// This is a dummy cart. In a real application, you'd manage this with a state management solution like Redux or React Context
const dummyCart = [
  { id: 1, name: 'Laptop Pro X', price: 75000, quantity: 1, image: '/images/laptop.jpg' },
  { id: 2, name: 'Smartphone Y', price: 35000, quantity: 2, image: '/images/smartphone.jpg' },
]

export default function Cart() {
  const [cart, setCart] = useState(dummyCart)

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg mr-4" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ₹{total.toLocaleString()}</p>
            <Link href="/checkout" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 inline-block mt-4">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

