'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store in local storage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    messages.push({ ...formData, id: Date.now() })
    localStorage.setItem('contactMessages', JSON.stringify(messages))
    
    // Show success message
    toast.success('Message sent successfully!')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-2 text-primary" />
              <p>123 E-commerce Street, Mumbai, Maharashtra 400001</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-primary" />
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-primary" />
              <p>info@ecommercehub.com</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Find Us on Map</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2161627668645!2d72.82861081489993!3d18.92179998717321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1623911269190!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

