import VintageTerminal from './components/VintageTerminal'
import SettingsBar from './components/SettingsBar'

export default function Home() {
  return (
    <>
      <main className="content-area min-h-screen pt-24 p-8 space-y-8">
        <div className="">
          <h1 className="font-rubik text-4xl">
            This is Rubik Black (900)
          </h1>
          <p className="font-chivo text-xl">
            And this is Chivo Light (300)
          </p>
          <p className="font-pathway text-2xl">
            This is Pathway Gothic One
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="font-chivo text-lg">
            Welcome to MATTER. You can interact with the terminal below to navigate to different sections.
          </p>
        </div>

        <VintageTerminal />

        {/* Add some content to demonstrate scrolling */}
        <div className="space-y-4">
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i} className="font-chivo text-base">
              This is sample content line {i + 1}. Scroll down to see the sticky settings bar at the bottom.
            </p>
          ))}
        </div>
      </main>

      <SettingsBar />
    </>
  );
}
