interface VintageWindowProps {
  children: React.ReactNode
}

export default function VintageWindow({ children }: VintageWindowProps) {
  return (
    <div className="fixed inset-0 bg-stone-400 p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Simple Beige Frame */}
      <div 
        className="h-full bg-stone-500 rounded-lg shadow-2xl border border-stone-300 relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(210, 180, 140, 0.04) 0%, transparent 50%)
          `
        }}
      >
        {/* Content Area with Internal Shadow */}
        <div className="relative p-3 sm:p-4 md:p-6 h-[calc(100%-3rem)]">
          <div 
            className="h-full bg-white rounded relative overflow-hidden"
            style={{
              boxShadow: `
                inset 3px 3px 6px rgba(0, 0, 0, 0.1),
                inset -1px -1px 3px rgba(255, 255, 255, 0.8)
              `
            }}
          >
            {/* Scrollable Content - This creates the sticky context */}
            <div className="h-full overflow-y-auto overflow-x-hidden relative">
              {children}
            </div>
          </div>
        </div>

        {/* Simple MATTER Text */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="text-xs sm:text-sm font-mono text-stone-600 font-medium tracking-wider">
            MATTER
          </div>
        </div>
      </div>
    </div>
  )
} 