'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { validateEmail, validatePassword, validatePhone, validatePincode } from '../lib/validation'
import { toast } from 'sonner'
import { User, Mail, Phone, MapPin, Home, MapIcon as City, Flag, Hash, Lock } from 'lucide-react'

export default function Profile() {
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
    password: '',
    newPassword: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      if (!isLoggedIn) {
        router.push('/login')
      } else {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        setFormData(prevData => ({
          ...prevData,
          ...userData,
          password: '',
          newPassword: '',
        }))
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
    if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'
    if (formData.newPassword && !validatePassword(formData.newPassword)) newErrors.newPassword = 'New password must be at least 8 characters long'
    if (!validatePhone(formData.phone)) newErrors.phone = 'Phone number must be 10 digits'
    if (!validatePincode(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}')
      if (formData.password && formData.password !== userData.password) {
        toast.error('Current password is incorrect')
        return
      }
      const updatedUserData = {
        ...userData,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      }
      if (formData.newPassword) {
        updatedUserData.password = formData.newPassword
      }
      localStorage.setItem('userData', JSON.stringify(updatedUserData))
      toast.success('Profile updated successfully')
    }
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-md">
        <div className="mb-6 relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-6 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Email"
            required
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6 relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Phone"
            required
          />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-6 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Address"
            required
          />
        </div>
        <div className="mb-6 relative">
          <City className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="City"
            required
          />
        </div>
        <div className="mb-6 relative">
          <Flag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="State"
            required
          />
        </div>
        <div className="mb-6 relative">
          <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Pincode"
            required
          />
          {errors.pincode && <p className="text-destructive text-sm mt-1">{errors.pincode}</p>}
        </div>
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Current Password"
          />
        </div>
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="New Password (optional)"
          />
          {errors.newPassword && <p className="text-destructive text-sm mt-1">{errors.newPassword}</p>}
        </div>
        <button type="submit" className="btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  )
}

