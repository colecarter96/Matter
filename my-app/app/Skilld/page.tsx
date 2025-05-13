import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const SkilldPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">Skilld</h1>
                        <h2 className="font-bold text-lg">Aug 2024</h2>
                        <p className="p-4">
                            Skilld was created to solve a common problem: the overwhelming amount of programming tutorials 
                            scattered across social media platforms. While there's an abundance of valuable content in short-form 
                            videos, it's often difficult to organize and reference later when you actually need it.
                        </p>

                        <p className="p-4">
                            Our platform functions as an automated ingestion and organizational tool specifically designed for 
                            instruction-style social media videos. Think of it as a dynamic recipe book for programming concepts, 
                            techniques, and best practices.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/SkilldScreenshot1.png"
                                alt="Skilld App Interface"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            The process is simple: users can share reels, shorts, or TikToks directly from the app. Our AI 
                            technology then analyzes the content, breaking down the instruction into clear, sequential steps 
                            and automatically categorizing relevant tools with comprehensive definitions.
                        </p>

                        <p className="p-4">
                            One of the most powerful features is the ability to maintain a personalized library of processes 
                            and tools organized by interest area. Whether you're looking to optimize SEO, master a specific 
                            Capcut tool, or create videos with Midjourney, Skilld keeps your resources organized and accessible.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/SkilldScreenshot2.png"
                                alt="Skilld Categorization Example"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>

                        <p className="p-4">
                            What sets Skilld apart is its intelligence in contextualizing information. Rather than just storing 
                            videos, our AI understands the relationships between different techniques, identifies prerequisites, 
                            and even suggests complementary skills based on your learning patterns.
                        </p>

                        <p className="p-4">
                            The platform also features a community aspect, allowing users to share their organized collections 
                            with others. This collaborative dimension transforms individual learning resources into community 
                            knowledge bases, accelerating everyone's growth.
                        </p>

                        <p className="p-4">
                            As we continue to develop Skilld, we're focusing on enhancing the AI's understanding of programming 
                            concepts across a wider range of languages and frameworks, while also refining the user experience 
                            to make knowledge retrieval even more intuitive.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default SkilldPage; 