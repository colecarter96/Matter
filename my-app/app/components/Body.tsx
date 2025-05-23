import ProjectCard from "./ProjectCard";
import About from "./About";

const Body = () => {
    return (
        <div>
            {/* Projects Title */}
            <div className="flex pl-[10%] sm:pl-[16%] pt-20 pb-4">
                <h2 className="text-2xl font-bold">Projects</h2>
            </div>

            {/* Project Cards - Staggered Grid */}
            <div className="flex justify-center">
                <div className="w-5/6 sm:w-4/6 pt-10">
                    {/* First row - Featured projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="md:col-span-2">
                            <ProjectCard 
                                title="Stock Trading Automation"
                                date="Feb 2024"
                                description="An automated trading bot that takes in government officials' trades and copies them."
                                link="/TradingAutomation"
                                featured={true}
                            />
                        </div>
                    </div>

                    {/* Staggered layout - rows with varying column spans */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        {/* Row 1 */}
                        <div className="md:col-span-7">
                            <ProjectCard 
                                title="Noted"
                                date="May 2024"
                                description="Record experiences of every variety. Get custom recommendations - tailor made for your taste from people you trust."
                                link="/Noted"
                            />
                        </div>
                        <div className="md:col-span-5">
                            <ProjectCard 
                                title="Skilld"
                                date="Aug 2024"
                                description="An automated ingestion and organizational tool for instruction-style social media videos. Think of a recipe book for programming."
                                link="/Skilld"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="md:col-span-5">
                            <ProjectCard 
                                title="IDE Lessons"
                                date="Apr 2024"
                                description="Capture the concepts you're using AI for and generate lesson plans to help you better learn and grow in that breadth."
                                link="/IDELessons"
                            />
                        </div>
                        <div className="md:col-span-7">
                            <ProjectCard 
                                title="Workd"
                                date="Jan 2024"
                                description="An automated ingestion and organizational tool for instruction-style social media videos. Think of a recipe book for working out."
                                link="/Workd"
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="md:col-span-8">
                            <ProjectCard 
                                title="10 Hours"
                                date="Jun 2024"
                                description="Dedicate 10 focused hours on becoming proficient at a new skill, learning from an expert."
                                link="/10Hours"
                            />
                        </div>
                        <div className="md:col-span-4">
                            <ProjectCard 
                                title="MidTrades"
                                date="Mar 2024"
                                description="AI Trading Insights based on your investment preferences and situation."
                                link="/MidTrades"
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="md:col-span-6">
                            <ProjectCard 
                                title="Bounty Hunter"
                                date="Jul 2024"
                                description="Simplify the shopping experience by hiring freelance personal shoppers looking to make a quick buck."
                                link="/BountyHunter"
                            />
                        </div>
                        <div className="md:col-span-6">
                            <ProjectCard 
                                title="Sentiment Aggregator"
                                date="Feb 2024"
                                description="Instantly understand public sentiment of any product using an AI-based scraper accessing all public opinions."
                                link="/SentimentAggregator"
                            />
                        </div>

                        {/* Row 5 */}
                        <div className="md:col-span-4">
                            <ProjectCard 
                                title="AI Game Commentator"
                                date="Oct 2024"
                                description="Add some flair to your home games with your choice of Voice Commentators using computer vision to enhance gameplay."
                                link="/AIGameCommentator"
                            />
                        </div>
                        <div className="md:col-span-8">
                            <ProjectCard 
                                title="Restaurant Payment"
                                date="Nov 2024"
                                description="Simplify the restaurant experience at your own pace; view the menu, order, and pay all at the touch of an NFC tag."
                                link="/RestaurantPayment"
                            />
                        </div>

                        {/* Pants Index standalone at the bottom */}
                        <div className="md:col-span-12 mt-4">
                            <ProjectCard 
                                title="Pants Index"
                                date="Sept 2024"
                                description="An improved online pants marketplace focused on measurements first. Sort pants by a range of measurements."
                                link="https://pants-index.vercel.app"
                                featured={true}
                            />
                        </div>
                    </div>
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
