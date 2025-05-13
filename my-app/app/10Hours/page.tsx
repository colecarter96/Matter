import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const TenHoursPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">10 Hours</h1>
                        <h2 className="font-bold text-lg">Jun 2024</h2>
                        <p className="p-4">
                            10 Hours is a platform dedicated to helping users become proficient at new skills by dedicating 
                            10 focused hours learning from experts.
                        </p>

                        <p className="p-4">
                            The platform features hundreds of courses from experts designed to quickly help beginners break 
                            through the initial learning stages and gain proficiency in new areas.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/10HoursScreenshot1.png"
                                alt="10 Hours Course Selection"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            Users can take 10-hour courses to gain a solid grasp of new concepts like Python basics, 
                            rookie car mechanics, cooking fundamentals, and many other skills. The focused approach 
                            ensures efficient learning and measurable progress.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default TenHoursPage; 