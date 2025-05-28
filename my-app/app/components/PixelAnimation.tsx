'use client'

import { useEffect, useState } from 'react'

export default function PixelAnimation() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const targetText = 'a place for things'

  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    
    const typewriterInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= targetText.length) {
        setDisplayText(targetText.slice(0, currentIndex))
        currentIndex++
      } else if (!isDeleting && currentIndex > targetText.length) {
        // Pause at full text
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--
        setDisplayText(targetText.slice(0, currentIndex))
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false
        currentIndex = 0
        // Pause before restarting
        setTimeout(() => {
          currentIndex = 1
        }, 1000)
      }
    }, isDeleting ? 100 : 150)

    return () => clearInterval(typewriterInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="w-full h-20 text-right pr-8 md:pr-16 lg:pr-20 bg-transparent">
      <div className="text-right">
        <div 
          className="font-pathway text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal italic tracking-wide"
          style={{ color: 'var(--foreground)' }}
        >
          {displayText}
          <span 
            className={`inline-block w-0.5 h-8 md:h-10 lg:h-12 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}
            style={{ backgroundColor: 'var(--foreground)' }}
          />
        </div>
      </div>
    </div>
  )
} 