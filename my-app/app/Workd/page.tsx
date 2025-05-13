import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const WorkdPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">Workd</h1>
                        <h2 className="font-bold text-lg">Jan 2024</h2>
                        <p className="p-4">
                            Workd is an automated ingestion and organizational tool for instruction-style social media 
                            videos focused on fitness. Think of it as a recipe book for working out.
                        </p>

                        <p className="p-4">
                            Users can share reels, shorts, or TikToks from the app, and our AI breaks down
                            clear steps and categorizes relevant exercises with definitions.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/WorkdScreenshot1.png"
                                alt="Workd App Interface"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            The platform allows users to maintain lists of routines and individual exercises, 
                            such as learning how to planche, "arnold style workouts", and more. It also contains 
                            a standard rep/set tracker for custom workouts.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default WorkdPage; 