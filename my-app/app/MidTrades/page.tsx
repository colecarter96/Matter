import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const MidTradesPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">MidTrades</h1>
                        <h2 className="font-bold text-lg">Mar 2024</h2>
                        <p className="p-4">
                            MidTrades offers AI-powered trading insights based on your investment preferences 
                            and personal situation.
                        </p>

                        <p className="p-4">
                            Users can input their preferences including risk tolerance, available capital, 
                            time frame, and trading frequency to receive customized investment recommendations.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/MidTradesScreenshot1.png"
                                alt="MidTrades Dashboard"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            The platform provides daily insights on what moves to make, whether to buy, 
                            sell, or sit tight. Users can also track theoretical trades recommended by 
                            the AI model to evaluate performance before committing real capital.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default MidTradesPage; 