'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ClientWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return <>{children}</>
}

