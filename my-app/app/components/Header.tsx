'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [copied, setCopied] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Debug: Log the current state on every render
  console.log('Header render - isDark:', isDark, 'should show:', isDark ? 'DarkLogo' : 'LightLogo')

  useEffect(() => {
    // Check initial theme on mount
    const checkTheme = () => {
      const themeAttribute = document.documentElement.getAttribute('data-theme')
      const isDarkMode = themeAttribute === 'dark'
      console.log('Theme check:', { themeAttribute, isDarkMode, previousIsDark: isDark })
      setIsDark(isDarkMode)
    }

    // Check theme immediately
    checkTheme()

    // Listen for theme changes via MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          console.log('Theme changed detected')
          checkTheme()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('matter.global.cl@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <header 
      className="sticky top-0 z-10 w-full py-6 px-8 border-b border-gray-200"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <div className="flex items-center justify-between">
        <Link href='/' className="flex items-center">
          <Image
            src={isDark ? '/DarkLogo.png' : '/LightLogo.png'}
            alt={`Matter Logo (${isDark ? 'Dark' : 'Light'} Theme)`}
            width={240}
            height={80}
            className="h-20 w-auto transition-opacity duration-300"
            priority
            onLoad={() => console.log(`Logo loaded: ${isDark ? 'DarkLogo' : 'LightLogo'} for ${isDark ? 'dark' : 'light'} theme`)}
          />
        </Link>
        <nav className="flex items-center space-x-8">
          <Link 
            href="/projects" 
            className="font-pathway text-xl hover:opacity-70 transition-opacity"
          >
            PROJECTS
          </Link>
          <button 
            onClick={copyEmail}
            className="font-pathway text-xl hover:opacity-70 transition-opacity relative"
          >
            {copied ? 'COPIED!' : 'CONTACT'}
          </button>
        </nav>
      </div>
    </header>
  );
}