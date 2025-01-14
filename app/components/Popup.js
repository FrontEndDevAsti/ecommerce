'use client'

import { useEffect } from 'react'

export default function Popup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup">
        <p className="text-lg font-semibold text-center">{message}</p>
      </div>
    </>
  )
}

