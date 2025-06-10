'use client'

import { usePathname } from 'next/navigation'
import VintageWindow from './VintageWindow'
import Header from './Header'
import SettingsBar from './SettingsBar'
import ClientOnly from './ClientOnly'

interface ConditionalVintageWrapperProps {
  children: React.ReactNode
}

export default function ConditionalVintageWrapper({ children }: ConditionalVintageWrapperProps) {
  const pathname = usePathname()
  
  // Only apply VintageWindow, Header, and SettingsBar on the projects page
  if (pathname === '/projects') {
    return (
      <VintageWindow>
        <Header/>
        {children}
        <ClientOnly fallback={
          <div className="sticky bottom-0 z-10 w-full py-3 px-8 border-t border-gray-200" style={{
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)'
          }}>
            <div className="flex items-center justify-center">
              <span className="font-pathway text-sm">Loading controls...</span>
            </div>
          </div>
        }>
          <SettingsBar />
        </ClientOnly>
      </VintageWindow>
    )
  }
  
  // For all other pages (including home), render without VintageWindow, Header, or SettingsBar
  return <>{children}</>
} 