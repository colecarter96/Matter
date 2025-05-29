'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [copied, setCopied] = useState(false)

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
        <h1 className="font-rubik text-2xl">
          <Link href='/'>
            MATTER
          </Link>
        </h1>
        <nav className="flex items-center space-x-8">
          <Link 
            href="/projects" 
            className="font-pathway text-lg hover:opacity-70 transition-opacity"
          >
            PROJECTS
          </Link>
          <button 
            onClick={copyEmail}
            className="font-pathway text-lg hover:opacity-70 transition-opacity relative"
          >
            {copied ? 'COPIED!' : 'CONTACT'}
          </button>
        </nav>
      </div>
    </header>
  );
}