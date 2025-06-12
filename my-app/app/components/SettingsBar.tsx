'use client'

import { useState, useEffect } from 'react'

export default function SettingsBar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [deviceInfo, setDeviceInfo] = useState('')

  useEffect(() => {
    // Initialize theme from localStorage or default to light
    

    // Get device info
    const getDeviceInfo = () => {
      const userAgent = navigator.userAgent
      if (userAgent.includes('Mac')) return 'MAC'
      if (userAgent.includes('Windows')) return 'WIN'
      if (userAgent.includes('Linux')) return 'LINUX'
      if (userAgent.includes('iPhone')) return 'IPHONE'
      if (userAgent.includes('Android')) return 'ANDROID'
      return 'UNKNOWN'
    }

    setDeviceInfo(getDeviceInfo())
  }, [])

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      })
      setCurrentTime(timeString)
    }

    updateTime() // Initial call
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div 
      className="sticky bottom-0 z-10 w-full py-3 px-8 border-t border-gray-200"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left - Time and device info */}
        <div className="flex items-center space-x-4">
          <span className="font-pathway text-sm">{currentTime}</span>
          <span className="font-pathway text-sm text-gray-500">{deviceInfo}</span>
        </div>
      </div>
    </div>
  )
} 