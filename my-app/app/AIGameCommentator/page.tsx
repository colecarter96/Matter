import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const AIGameCommentatorPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">AI Game Commentator</h1>
                        <h2 className="font-bold text-lg">Oct 2024</h2>
                        <p className="p-4">
                            AI Game Commentator adds flair to your home gaming sessions with a selection of 
                            AI-powered voice commentators that enhance the gaming experience.
                        </p>

                        <p className="p-4">
                            Using computer vision technology, the system watches what's happening in your game 
                            in real-time and provides entertaining commentary through various AI voice personalities.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/AIGameCommentatorScreenshot1.png"
                                alt="AI Game Commentator Interface"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            Players can select from a variety of commentator personalities, from serious sports 
                            analysts to comedic commentators, creating a customized and entertaining broadcast-like 
                            atmosphere for any game.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default AIGameCommentatorPage; 