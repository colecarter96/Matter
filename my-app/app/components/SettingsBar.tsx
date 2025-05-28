'use client'

import { useState, useEffect, useRef } from 'react'

export default function SettingsBar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = isMuted ? 0 : volume
    audio.loop = true

    // Auto-play after user interaction (required by browsers)
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        setIsPlaying(true) // Automatically start playing after first interaction
        audio.play().catch(console.error)
      }
    }

    // Listen for any user interaction
    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('keydown', handleFirstInteraction)

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [hasInteracted, isMuted, volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !hasInteracted) return

    if (isPlaying) {
      audio.play().catch(console.error)
    } else {
      audio.pause()
    }
  }, [isPlaying, hasInteracted])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div 
      className="sticky bottom-0 z-10 w-full py-3 px-8 border-t border-gray-200"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source src="/audio/Playboi Carti - 24 Songs (Made It This Far) (Official Instrumental) (prod. @tr3) [N1AexqXF-Y0].mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex items-center justify-between">
        {/* Left - Theme toggle */}
        <button
          onClick={toggleDarkMode}
          className="font-pathway text-sm hover:opacity-70 transition-opacity"
        >
          {isDarkMode ? 'LIGHT' : 'DARK'}
        </button>

        {/* Center - Audio controls */}
        <div className="flex items-center space-x-4">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="font-pathway text-sm hover:opacity-70 transition-opacity"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>

          {/* Mute/Unmute */}
          <button
            onClick={toggleMute}
            className="font-pathway text-sm hover:opacity-70 transition-opacity"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? 'UNMUTE' : 'MUTE'}
          </button>

          {/* Volume */}
          <div className="flex items-center space-x-2">
            <span className="font-pathway text-sm">VOL</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-gray-200 rounded appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Right - Status indicator */}
        <div className="font-pathway text-sm text-gray-600">
          {!hasInteracted ? '●' : isPlaying ? '♪' : '○'}
        </div>
      </div>
    </div>
  )
} 