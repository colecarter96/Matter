interface VintageWindowProps {
  children: React.ReactNode
}

export default function VintageWindow({ children }: VintageWindowProps) {
  return (
    <div className="fixed inset-0 bg-[#a39f98] px-4 sm:px-8 md:px-14 lg:px-28 xl:px-32 py-12 sm:py-14 md:py-16 lg:py-14 xl:py-20">
      {/* SVG Noise Filter */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="noiseFilter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              baseFrequency="0.3" 
              numOctaves="6" 
              stitchTiles="stitch"
              type="fractalNoise"
            />
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0.5"/>
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: 'url(#noiseFilter)',
          mixBlendMode: 'multiply',
          opacity: 0.8
        }}
      />

      {/* Recessed MATTER Text Background */}
      <div 
          className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-4 xl:bottom-5  left-4 sm:left-8 md:left-14 lg:left-28 xl:left-32 right-4 sm:right-8 md:right-14 lg:right-28 xl:right-32 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 100 }}
        >
          <div 
            className="font-pathway text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal tracking-wider select-none"
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              textShadow: `
                2px 2px 4px rgba(255, 255, 255, 0.8),
                3px 3px 6px rgba(0, 0, 0, 0.4),
                -1px -1px 2px rgba(255, 255, 255, 0.6),
                0px 0px 8px rgba(0, 0, 0, 0.3)
              `
            }}
          >
            MATTER
          </div>
        </div>

      {/* Container for both scrollable content and fixed shadow */}
      <div className="h-full rounded-lg relative">
        
        
        {/* Scrollable Content */}
        <div 
          className="h-full overflow-y-auto overflow-x-hidden relative rounded-lg"
          style={{
            backgroundColor: 'var(--background)',
            zIndex: 2
          }}
        >
          {children}
        </div>
        
        {/* Shadow Overlay - Fixed outside scrollable area */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            zIndex: 9999,
            background: `
              radial-gradient(circle at center, 
                rgba(0, 0, 0, 0.3) 0%, 
                rgba(0, 0, 0, 0.2) 25%, 
                rgba(0, 0, 0, 0.12) 50%, 
                rgba(0, 0, 0, 0.06) 70%, 
                rgba(0, 0, 0, 0.02) 85%, 
                transparent 100%
              )
            `,
            boxShadow: `
              inset 0 0 20px rgba(0, 0, 0, 0.15),
              inset 0 0 40px rgba(0, 0, 0, 0.12),
              inset 0 0 80px rgba(0, 0, 0, 0.08),
              inset 5px 5px 25px rgba(0, 0, 0, 0.1)
            `
          }}
        />
      </div>
    </div>
  )
} 

