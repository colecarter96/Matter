import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Image from "next/image";

const TradingAutomationPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-40 pb-20">
                    <div className="w-2/3 text-left">
                        <h1 className="font-bold text-xl">Government Trading Automation</h1>
                        <h2 className="font-bold text-lg">Feb 2024</h2>
                        <p className="p-4">Around last year Liam and I learned that there was a law that required people in the United State government
                            to have to release their trades publicly. We looked at each other and instantly realized that these people must 
                            make bank on their investments. They legitamately get to see what laws and restrictions are going to be made or put 
                            in place in different sectors. 
                        </p>

                        <p className="p-4">
                            So we got together and did some research on how we could copy these trades. Around this time was before we heard of the 
                            popular copy trading applications. The only one we found when doing research was Quantbase. At the time we thought that 
                            Quantbase was a bit advanced for the average person. In a similar way that TradingView is for the average Robinhood user.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/TradingAutomationPoliticians.png"
                                alt="Politicians Trades"
                                width={500}  // Original width (can stay fixed)
                                height={250} // Original aspect ratio (height)
                                className="w-2/3 h-auto" // Image will take up 2/3 of the parent container width, keeping aspect ratio
                            />
                        </div>
                        

                        <p className="p-4">
                            We began to come up with a plan. I was able to create and use a web scraper to gather all of our data on what trades they were making. 
                            I was also able to place the trades through Alpaca's API. We were all setup. Except we would have to run this once a day
                            in the morning on one of our laptops. At first that wasn't a problem. But if you missed a day that would cause you to be behind
                            on trades that were already pretty delayed (due to the fact that government officials don't have to instantly report trades).
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/TradingAutomationGraph.png"
                                alt="Politicians Trades"
                                width={500}  // Original width (can stay fixed)
                                height={250} // Original aspect ratio (height)
                                className="w-2/3 h-auto" // Image will take up 2/3 of the parent container width, keeping aspect ratio
                            />
                        </div>

                        <p className="p-4">
                            So Liam used his experience with AWS and setup a job on an AWS EC2 instance and connected it to an S2 Bucket. We were able to run
                            our little experiment with $100,000 of paper money for about 3 months. 
                        </p>

                        

                        <p className="p-4">
                            The outcome was as follows:
                        </p>

                        <p className="pl-6">
                            Traded ~ $70,000
                        </p>

                        <p className="pt-2 pl-6">
                            Current account position ~  up $5,617
                        </p>

                        <p className="pt-2 pl-6">
                            Highest winning position ~  +$2,354.82
                        </p>

                        <p className="pt-2 pl-6">
                            Highest losing position ~  -$2,544.35
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/TradingAutomationTrades.png"
                                alt="Politicians Trades"
                                width={500}  // Original width (can stay fixed)
                                height={250} // Original aspect ratio (height)
                                className="w-2/3 h-auto" // Image will take up 2/3 of the parent container width, keeping aspect ratio
                            />
                        </div>

                        <p className="p-4">
                            This was a good project to learn and get more familiar with making a web scraper. It also was cool to see that it wasn't
                            too hard to create an automation and run it on a cloud computing platform like AWS. We were overall not motivated by the numbers
                            that we saw, and there was a sudden boom in mobile applications for copy trading with government officials, so we decided not 
                            to move forward with this project.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
        
    );
}

export default TradingAutomationPage;