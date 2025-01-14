'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { validatePhone, validatePincode } from '../lib/validation'
import { toast } from 'sonner'
import { User, Mail, Phone, MapPin, Home, MapIcon as City, Flag, Hash } from 'lucide-react'

export default function Checkout() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      if (!isLoggedIn) {
        router.push('/login')
      } else {
        setIsLoading(false)
      }
    }

    checkLoginStatus()
  }, [router])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!validatePhone(formData.phone)) newErrors.phone = 'Phone number must be 10 digits'
    if (!validatePincode(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      toast.success('Checkout successful! Your order has been placed.')
      localStorage.removeItem('cart')
      window.dispatchEvent(new Event('storage'))
      router.push('/products')
    }
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Email"
            required
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Phone"
            required
          />
          {errors.phone && <p className="text-gray-800 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Address"
            required
          />
        </div>
        <div className="relative">
          <City className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="City"
            required
          />
        </div>
        <div className="relative">
          <Flag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="State"
            required
          />
        </div>
        <div className="relative">
          <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Pincode"
            required
          />
          {errors.pincode && <p className="text-gray-800 text-sm mt-1">{errors.pincode}</p>}
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
          Place Order
        </button>
      </form>
    </div>
  )
}

