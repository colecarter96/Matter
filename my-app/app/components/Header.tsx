import Link from 'next/link'

export default function Header() {
  return (
    <header 
      className="sticky top-0 z-10 w-full py-6 px-8 border-b border-gray-200"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-rubik text-2xl">
          MATTER
        </h1>
        <nav className="flex items-center space-x-8">
          <Link 
            href="/projects" 
            className="font-pathway text-lg hover:opacity-70 transition-opacity"
          >
            PROJECTS
          </Link>
          <Link 
            href="/contact" 
            className="font-pathway text-lg hover:opacity-70 transition-opacity"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}