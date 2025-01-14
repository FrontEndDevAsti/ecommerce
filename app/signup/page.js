'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateEmail, validatePassword, validatePhone } from '../lib/validation'
import Popup from '../components/Popup'
import { User, Mail, Lock, Phone } from 'lucide-react'

export default function Signup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })
  const [errors, setErrors] = useState({})
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'
    if (!validatePassword(formData.password)) newErrors.password = 'Password must be at least 8 characters long'
    if (!validatePhone(formData.phone)) newErrors.phone = 'Phone number must be 10 digits'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('userData', JSON.stringify(formData))
      setShowPopup(true)
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    router.push('/login')
  }

  return (
    <div className="form-container px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="Email"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            placeholder="Password"
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="Phone"
            required
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <button type="submit" className="btn-primary w-full">
            Sign Up
          </button>
        </div>
      </form>
      {showPopup && (
        <Popup message="Account created successfully! Please log in." onClose={handleClosePopup} />
      )}
    </div>
  )
}

