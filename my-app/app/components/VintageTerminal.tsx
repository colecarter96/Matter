'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/navigation'

export default function VintageTerminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const terminalLines = useMemo(() => [
    '> Welcome to MATTER Terminal v0.5',
    '> Initializing system...',
    '> Loading projects database...',
    '> Projects successfully loaded',
    '> Type "PROJ" for projects command',
    '> Type "CTC" for contact command'
  ], [])

  useEffect(() => {
    if (!isTypingComplete) {
      const timer = setTimeout(() => {
        if (currentLine < terminalLines.length) {
          const line = terminalLines[currentLine]
          if (displayText.length < line.length) {
            setDisplayText(line.substring(0, displayText.length + 1))
          } else {
            setCurrentLine(currentLine + 1)
            setDisplayText('')
          }
        } else {
          setIsTypingComplete(true)
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [currentLine, displayText, terminalLines, isTypingComplete])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    if (isTypingComplete && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isTypingComplete])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const command = userInput.trim().toUpperCase()
      const newHistory = [...commandHistory, `> ${userInput}`]
      
      if (command === 'PROJ') {
        newHistory.push('> Navigating to projects...')
        setCommandHistory(newHistory)
        setTimeout(() => router.push('/projects'), 1000)
      } else if (command === 'CTC') {
        newHistory.push('> Navigating to contact...')
        setCommandHistory(newHistory)
        setTimeout(() => router.push('/contact'), 1000)
      } else if (command === 'HELP') {
        newHistory.push('> Available commands: PROJ, CTC, HELP')
        setCommandHistory(newHistory)
      } else if (command === '') {
        setCommandHistory(newHistory)
      } else {
        newHistory.push(`> Command "${command}" not found. Type HELP for available commands.`)
        setCommandHistory(newHistory)
      }
      
      setUserInput('')
    }
  }

  const handleClick = () => {
    if (isTypingComplete && inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div 
      className="w-full bg-black border-2 border-white rounded-lg font-mono text-white shadow-2xl cursor-text h-64"
      onClick={handleClick}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        </div>
        <span className="text-sm">MATTER Terminal</span>
        <div className="w-12"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-1 h-48 overflow-y-auto">
        {terminalLines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="text-sm break-words">
            {line}
          </div>
        ))}
        
        {!isTypingComplete && currentLine < terminalLines.length && (
          <div className="text-sm break-words">
            {displayText}
            {showCursor && <span className="bg-white text-black">█</span>}
          </div>
        )}

        {/* Command History */}
        {commandHistory.map((cmd, index) => (
          <div key={`cmd-${index}`} className="text-sm break-words">
            {cmd}
          </div>
        ))}

        {/* Input Line */}
        {isTypingComplete && (
          <div className="text-sm break-words flex">
            <span>{'> '}</span>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-white flex-1 font-mono text-sm"
              style={{ caretColor: 'transparent' }}
            />
            {showCursor && <span className="bg-white text-black">█</span>}
          </div>
        )}
      </div>
    </div>
  )
} 