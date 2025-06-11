// import VintageTerminal from './components/VintageTerminal'
// import ClientOnly from './components/ClientOnly'
// import PixelAnimation from './components/PixelAnimation'
import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
      style={{
        backgroundColor: '#ededed',
        color: '#2e2e2e',
      }}
    >
      {/* Blank home page */}
      <div className="font-comico pt-20 sm:pt-0 px-5 md:px-0 text-xl md:text-3xl xl:text-4xl">
        <div className="flex pt-10 sm:pt-20">
          <div className="w-1/3 text-right mr-5">
            <p className="inline-block px-6 py-2 border-2 border-black rounded-full">Matter</p>
          </div>
          <div className="w-2/3 ml-5">
            <p className="">A place for things</p>
            <p className="">An attempt at</p>
            <p className="">Connecting all the dots</p>
          </div>
          
        </div>

        <div className="flex pt-10 sm:pt-20">
          <div className="w-1/3 text-right mr-5">
            <p className="">Newsletters</p>
          </div>
          <div className="w-2/3 ml-5">
            <a href="https://matterrnd.substack.com/" className="block cursor-pointer hover:underline" target="_blank" rel="noopener referrer">
              Matter Research & Development 
            </a>
            <a href="https://oldafraid.substack.com/" className="block cursor-pointer hover:underline" target="_blank" rel="noopener referrer">
              Old N' Afraid
            </a>
          </div>
        </div>

        <div className="flex pt-10 sm:pt-20">
          <div className="w-1/3 text-right mr-5">
            <p className="">Projects</p>
          </div>
          <div className="w-2/3 ml-5">
            <Link href="/projects">
              <p className="cursor-pointer hover:underline">View Projects</p>
            </Link>
          </div>
        </div>

        <div className="flex pt-10 sm:pt-20">
          <div className="w-1/3 text-right mr-5">
            <p className="">Socials</p>
          </div>
          <div className="w-2/3 ml-5">
            <a href="https://www.instagram.com/matter.img/" className="block cursor-pointer hover:underline" target="_blank" rel="noopener referrer">
              Matter.img
            </a>
            <a href="https://www.instagram.com/matter.rnd/" className="block cursor-pointer hover:underline" target="_blank" rel="noopener referrer">
              Matter.rnd
            </a>
            <a href="https://www.instagram.com/old.n.afraid/" className="block cursor-pointer hover:underline" target="_blank" rel="noopener referrer">
              Old.N.Afraid
            </a>
          </div>
        </div>
      </div>
      
    </main>
  );
}



