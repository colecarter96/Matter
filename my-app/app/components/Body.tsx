
import ProjectCard from "./ProjectCard";
import About from "./About";

const Body = () => {
    return (
        <div>
            {/* Projects Title */}
            <div className="flex pl-[10%] sm:pl-[16%] pt-20 pb-4">
                <h2 className="text-2xl font-bold">Projects</h2>
            </div>

            {/* Project Cards Grid */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-5/6 sm:w-4/6 pt-10">
                    <ProjectCard 
                        title="Stock Trading Automation"
                        date="Feb 2024"
                        description="An automated trading bot that takes in government officials trades and copies them."
                        link="/TradingAutomation"
                    />
                    <ProjectCard 
                        title="Pants Index"
                        date="Sept 2024"
                        description="An improved online pants marketplace focused on measurements first. Sort pants by a range of measurements."
                        link="https://pants-index.vercel.app"
                    />
                </div>
            </div>

            {/* About Section - Centered with limited width */}
            <div className="flex justify-center pt-40 pb-20">
                <div className="w-2/3 text-left">
                    <About />
                </div>
            </div>
        </div>
    );
}

export default Body;
