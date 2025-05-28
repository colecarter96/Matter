'use client'

import { ReactNode } from 'react'

interface MacWindowProps {
  title: string
  date: string
  status: 'active' | 'completed' | 'on-hold' | 'planning'
  description: string
  size?: 'small' | 'medium' | 'large'
  className?: string
  isCompleted?: boolean
  children?: ReactNode
}

export default function MacWindow({ 
  title, 
  date, 
  status, 
  description, 
  size = 'medium',
  className = '',
  isCompleted = false,
  children
}: MacWindowProps) {
  // Enhanced responsive sizing with completed project boost
  const getSizeClasses = () => {
    // If children are provided, don't apply height constraints
    if (children) {
      return 'w-full'
    }
    
    const baseSize = isCompleted ? getNextSize(size) : size
    
    switch (baseSize) {
      case 'small':
        return 'w-full h-48 sm:h-52 md:h-56'
      case 'medium':
        return 'w-full h-56 sm:h-60 md:h-64 lg:h-68'
      case 'large':
        return 'w-full h-64 sm:h-72 md:h-80 lg:h-84'
      default:
        return 'w-full h-56 sm:h-60 md:h-64'
    }
  }

  const getNextSize = (currentSize: string) => {
    switch (currentSize) {
      case 'small': return 'medium'
      case 'medium': return 'large'
      case 'large': return 'large'
      default: return 'medium'
    }
  }

  const statusColors = { 
    active: 'bg-blue-700 text-[#ededed] border-blue-800',
    completed: 'bg-green-700 text-[#ededed] border-green-800',
    'on-hold': 'bg-yellow-700 text-[#ededed] border-yellow-800',
    planning: 'bg-gray-700 text-[#ededed] border-gray-800'
  }

  return (
    <div className={`${getSizeClasses()} ${className}`}>
      {/* Mac Window Container with theme support */}
      <div className="theme-window shadow-sm overflow-hidden transition-all duration-300 hover:shadow-none h-full">
        {/* Mac-style title bar */}
        <div className="theme-title-bar h-7 sm:h-8 flex items-center px-3 sm:px-4 relative">
          {/* Traffic lights */}
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 theme-traffic-light-1 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 theme-traffic-light-2 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 theme-traffic-light-3 rounded-full"></div>
          </div>
          
          {/* Window title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs sm:text-sm font-medium theme-title-text truncate px-8 sm:px-12">{title}</span>
          </div>
        </div>

        {/* Content area */}
        {children ? (
          <div className="w-full theme-content-text">
            {children}
          </div>
        ) : (
          <div className="p-4 sm:p-5 font-roboto md:p-6 h-full flex flex-col">
            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold theme-heading-text leading-tight flex-1">{title}</h3>
              <span className={`px-2 py-1 text-xs font-medium border whitespace-nowrap rounded-md ${statusColors[status]}`}>
                {status}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm theme-muted-text mb-3 sm:mb-4">{date}</p>
            
            <div className="flex-1 overflow-hidden">
              <p className="text-xs sm:text-sm md:text-base theme-body-text leading-relaxed">{description}</p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .theme-window {
          background-color: var(--window-bg);
          border: 1px solid var(--window-border);
        }
        
        .theme-title-bar {
          background-color: var(--title-bar-bg);
          border-bottom: 1px solid var(--title-bar-border);
        }
        
        .theme-traffic-light-1 {
          background-color: var(--traffic-light-1);
        }
        
        .theme-traffic-light-2 {
          background-color: var(--traffic-light-2);
        }
        
        .theme-traffic-light-3 {
          background-color: var(--traffic-light-3);
        }
        
        .theme-title-text {
          color: var(--title-text);
        }
        
        .theme-content-text {
          color: var(--content-text);
        }
        
        .theme-heading-text {
          color: var(--heading-text);
        }
        
        .theme-muted-text {
          color: var(--muted-text);
        }
        
        .theme-body-text {
          color: var(--body-text);
        }
      `}</style>
    </div>
  )
} 