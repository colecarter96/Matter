import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const BountyHunterPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">Bounty Hunter</h1>
                        <h2 className="font-bold text-lg">Jul 2024</h2>
                        <p className="p-4">
                            Bounty Hunter simplifies the shopping experience by connecting users with freelance 
                            personal shoppers looking to make extra money.
                        </p>

                        <p className="p-4">
                            The platform allows users to post bounties for specific items, whether secondhand or new. 
                            Freelance shoppers can then accept these bounties and search for the requested items.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/BountyHunterScreenshot1.png"
                                alt="Bounty Hunter Interface"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            When shoppers successfully locate an item, they receive payouts for completing the bounty. 
                            This creates a win-win situation where shoppers earn extra income while helping clients find 
                            hard-to-locate or specialty items.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default BountyHunterPage; 