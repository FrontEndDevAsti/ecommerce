'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateEmail, validatePassword } from '../lib/validation'
import { Mail, Lock } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!validateEmail(email)) newErrors.email = 'Invalid email address'
    if (!validatePassword(password)) newErrors.password = 'Password must be at least 8 characters long'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      const userData = JSON.parse(localStorage.getItem('userData'))
      if (userData && userData.email === email && userData.password === password) {
        localStorage.setItem('isLoggedIn', 'true')
        window.dispatchEvent(new Event('login'))
        toast.success('Login successful!')
        router.push('/products')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      <div className="form-container w-full max-w-md">
        <div className="text-center mb-8">
          <Image src="https://i.postimg.cc/28tQv15w/logo.png" alt="EcommerceHub Logo" width={300} height={300} className="mx-auto rounded-full" />
          <h1 className="text-3xl font-bold mt-4">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Email"
              required
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field pl-10"
              placeholder="Password"
              required
            />
            {errors.password && <p className="text-destructive text-sm mt-1">{errors.password}</p>}
          </div>
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

