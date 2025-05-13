import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const SentimentAggregatorPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">Sentiment Aggregator</h1>
                        <h2 className="font-bold text-lg">Feb 2024</h2>
                        <p className="p-4">
                            Sentiment Aggregator helps users instantly understand public sentiment about any product 
                            using an AI-based scraper that accesses all public opinions from blogs, Reddit, forums, 
                            and more.
                        </p>

                        <p className="p-4">
                            The platform provides custom reports analyzing the emotional standing of products, 
                            services, or brands by consolidating feedback from across the internet.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/SentimentAggregatorScreenshot1.png"
                                alt="Sentiment Analysis Dashboard"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            Users can view content from multiple platforms simultaneously, including Twitter, 
                            Reddit, YouTube, and Instagram, getting a comprehensive view of public opinion 
                            rather than relying on a single source.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default SentimentAggregatorPage; 