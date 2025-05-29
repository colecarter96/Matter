import MacWindow from '../components/MacWindow'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Pants Index",
      date: "December 2024",
      status: "completed" as const,
      description: "An improved online pants marketplace focused on measurements first. Sort pants by a range of measurements.",
      size: "large" as const
    },
    {
      title: "Stock Trading Automation",
      date: "January 2024", 
      status: "completed" as const,
      description: "An automated trading bot that takes in government official's trades and copies them.",
      size: "large" as const
    },
    {
      title: "Restaurant Payment",
      date: "Not Started", 
      status: "planning" as const,
      description: "Simplify the restaurant experience at your own pace; view the menu, order, and pay all at the touch of an NFC tag.",
      size: "medium" as const
    },
    {
      title: "Noted",
      date: "Not Started",
      status: "planning" as const,
      description: "Record experiences of every variety. Get custom recommendations, tailor made for your taste from people you trust",
      size: "medium" as const
    },
    {
      title: "Bounty Hunter",
      date: "Not Started",
      status: "planning" as const,
      description: "Simplify the shopping experience by hiring freelance personal shoppers looking to make a quick buck.",
      size: "medium" as const
    },
    {
      title: "Skilld",
      date: "Not Started",
      status: "planning" as const,
      description: "An automated ingestion and organizational tool for instruction-style social media videos. Think of a recipe book for skills.",
      size: "medium" as const
    },
    {
      title: "MidTradesAI",
      date: "Not Started",
      status: "planning" as const,
      description: "AI Trading Insights based on your invesment preferences and situation.",
      size: "medium" as const
    },
    {
      title: "IDE Lessons",
      date: "Not Started",
      status: "planning" as const,
      description: "Capture the concepts you're using Ai for and generate lesson plans to help you better learn and grow in that breadth.",
      size: "medium" as const
    },
    {
      title: "Sentiment Aggregator",
      date: "Not Started",
      status: "planning" as const,
      description: "Instantly understand public sentiment of any product using an AI-based web scraper accessing public opinions across platforms.",
      size: "medium" as const
    },
    {
      title: "AI Game Commentator",
      date: "Not Started",
      status: "planning" as const,
      description: "Add some flair to your home games with your choice of Voice Commentators using computer vision to enhance gameplay.",
      size: "medium" as const
    },
    {
      title: "Workd",
      date: "Not Started",
      status: "planning" as const,
      description: "An automated ingestion and organizational tool for workout style social media content.",
      size: "medium" as const
    }
  ]

  return (
    <main className="content-area min-h-screen pt-16 sm:pt-20 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
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