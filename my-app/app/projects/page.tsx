import MacWindow from '../components/MacWindow'

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      date: "December 2024",
      status: "active" as const,
      description: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, advanced search capabilities, and seamless payment integration. Currently implementing the checkout flow and user dashboard.",
      size: "large" as const
    },
    {
      title: "Task Management App",
      date: "November 2024", 
      status: "completed" as const,
      description: "Clean and intuitive task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.",
      size: "medium" as const
    },
    {
      title: "Portfolio Website",
      date: "October 2024",
      status: "completed" as const,
      description: "Personal portfolio showcasing projects and skills with a vintage aesthetic and smooth animations.",
      size: "small" as const
    },
    {
      title: "AI Content Generator",
      date: "January 2025",
      status: "planning" as const,
      description: "Intelligent content generation tool that helps writers and marketers create engaging copy using advanced AI models and natural language processing.",
      size: "large" as const
    },
    {
      title: "Weather Dashboard",
      date: "September 2024",
      status: "completed" as const,
      description: "Real-time weather monitoring dashboard with location-based forecasts and historical data visualization.",
      size: "medium" as const
    },
    {
      title: "Crypto Tracker",
      date: "March 2025",
      status: "on-hold" as const,
      description: "Cryptocurrency portfolio tracker with real-time price updates, profit/loss calculations, and market trend analysis.",
      size: "small" as const
    },
    {
      title: "Social Media Analytics",
      date: "February 2025",
      status: "active" as const,
      description: "Comprehensive analytics platform for social media managers to track engagement, growth metrics, and audience insights across multiple platforms.",
      size: "large" as const
    },
    {
      title: "Recipe Finder",
      date: "August 2024",
      status: "completed" as const,
      description: "Smart recipe discovery app that suggests meals based on available ingredients and dietary preferences.",
      size: "medium" as const
    }
  ]

  return (
    <main className="content-area min-h-screen pt-16 sm:pt-20 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="font-pathway text-right text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">Projects</h1>
          <p className="font-pathway text-right text-base sm:text-lg lg:text-xl text-gray-600">A collection of work and experiments</p>
        </div>

        {/* Responsive CSS Grid layout that prevents overlapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-max">
          {projects.map((project, index) => {
            const isCompleted = project.status === 'completed'
            
            return (
              <div 
                key={index} 
                className={`
                  ${isCompleted ? 'sm:col-span-1' : ''} 
                  flex
                `}
              >
                <MacWindow
                  title={project.title}
                  date={project.date}
                  status={project.status}
                  description={project.description}
                  size={project.size}
                  isCompleted={isCompleted}
                  className="w-full"
                />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
} 