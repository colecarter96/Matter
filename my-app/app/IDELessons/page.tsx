import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const IDELessonsPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">IDE Lessons</h1>
                        <h2 className="font-bold text-lg">Apr 2024</h2>
                        <p className="p-4">
                            IDE Lessons was developed to help users capture the concepts they're using AI for 
                            and generate lesson plans to better learn and grow in that breadth of knowledge.
                        </p>

                        <p className="p-4">
                            The platform allows users to view concepts that they're using AI to help with in their 
                            daily life, from programming concepts to other technical skills, and then choose which 
                            ones they would like to learn more about to create personalized lesson plans.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/IDELessonsScreenshot1.png"
                                alt="IDE Lessons Interface"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default IDELessonsPage; 