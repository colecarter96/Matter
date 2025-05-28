import VintageTerminal from './components/VintageTerminal'
import SettingsBar from './components/SettingsBar'
import ClientOnly from './components/ClientOnly'
import PixelAnimation from './components/PixelAnimation'

export default function Home() {
  return (
    <>
  <main className="min-h-screen">
    {/* Top content fills remaining space */}
    <div className="pt-24">
      <PixelAnimation />
    </div>

    {/* Terminal with fixed height */}
    <div className="bottom-0">
      <ClientOnly fallback={
        <div className="w-full h-full bg-[#2d2d2d] border-2 border-white rounded-lg font-mono text-white shadow-2xl flex items-center justify-center">
          <span className="text-sm">Loading terminal...</span>
        </div>
      }>
        <VintageTerminal />
      </ClientOnly>
    </div>
  </main>
</>


  );
}
