// import VintageTerminal from './components/VintageTerminal'
// import ClientOnly from './components/ClientOnly'
// import PixelAnimation from './components/PixelAnimation'
import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="overflow-x-hidden min-h-screen"
      style={{
        backgroundColor: '#ededed',
        color: '#2e2e2e',
      }}
    >
      {/* Blank home page */}
      <div className="font-comico pt-16 sm:pt-0 px-3 sm:px-5 md:px-0 text-lg sm:text-lg md:text-2xl xl:text-4xl max-w-screen-xl mx-auto">
        
        <div className="flex pt-8 sm:pt-20">
          <div className="w-[30%] text-right mr-2 lg:mr-3 break-words">
            {/* <p className="inline-block px-6 py-2 border-2 border-black rounded-full">Matter</p> */}
            <p>Matter</p>
          </div>
          <div className="w-[70%] ml-2 lg:ml-3">
            <p className="">A place for things</p>
            <p className="">An attempt at</p>
            <p className="">Connecting all the dots</p>
          </div>
        </div>

        <div className="flex pt-8 sm:pt-10">
          <div className="w-[30%] text-right mr-2 lg:mr-3 break-words">
            <p>Newsletter</p>
          </div>
          <div className="w-[70%] ml-2 lg:mr-3">
            <a href="https://matterrnd.substack.com/" className="block hover:line-through" target="_blank" rel="noopener referrer">
              Matter Research & Development 
            </a>
            <a href="https://oldafraid.substack.com/" className="block hover:line-through" target="_blank" rel="noopener referrer">
              Old N' Afraid
            </a>
          </div>
        </div>

        <div className="flex pt-8 sm:pt-10">
          <div className="w-[30%] text-right mr-2 lg:mr-3 break-words">
            <p>Projects</p>
          </div>
          <div className="w-[70%] ml-2 lg:ml-3">
            <Link href="/projects">
              <p className="hover:line-through">EXPLORE</p>
            </Link>
          </div>
        </div>

        <div className="flex pt-8 sm:pt-10">
          <div className="w-[30%] text-right mr-2 lg:mr-3 break-words">
            <p>Socials</p>
          </div>
          <div className="w-[70%]  ml-2 lg:ml-3">
            <a href="https://www.instagram.com/matter.img/" className="block hover:line-through" target="_blank" rel="noopener referrer">
              Matter.img
            </a>
            <a href="https://www.instagram.com/matter.rnd/" className="block hover:line-through" target="_blank" rel="noopener referrer">
              Matter.rnd
            </a>
            <a href="https://www.instagram.com/old.n.afraid/" className="block hover:line-through" target="_blank" rel="noopener referrer">
              Old.N.Afraid
            </a>
          </div>
        </div>

        
      </div>

      
      
    </main>
  );
}



