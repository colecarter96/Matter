import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const NotedPage = () => {
    return(
        <div>
            <Header />
                <div className="flex justify-center pt-28 md:pt-40 pb-20">
                    <div className="w-11/12 md:w-9/12 sm:9/12 text-left">
                        <h1 className="font-bold text-xl">Noted</h1>
                        <h2 className="font-bold text-lg">May 2024</h2>
                        <p className="p-4">
                            Noted was born from a simple observation: we all have experiences worth remembering, but our 
                            recommendations and memories often get lost in the shuffle of everyday life. We wanted to create 
                            a platform where people could not only record their experiences of every variety, but also get 
                            recommendations tailored specifically to their taste from people they trust.
                        </p>

                        <p className="p-4">
                            The core idea behind Noted is that the best recommendations come from people whose tastes align 
                            with yours. Unlike generic review platforms, Noted prioritizes your personal network and users 
                            with similar preference patterns to provide suggestions that truly resonate with you.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/NotedScreenshot1.png"
                                alt="Noted App Screenshot"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>
                        
                        <p className="p-4">
                            With Noted, users can review restaurants, experiences, and all forms of content including 
                            movies, TV shows, books, and music. Each review becomes a "Note" in your personal collection, 
                            creating a digital memory bank of your experiences that you can reference anytime.
                        </p>

                        <p className="p-4">
                            One of our favorite features is the "Future Notes" tab, which functions as a wishlist of 
                            experiences. When friends recommend something, you can quickly add it to your Future Notes, 
                            ensuring you never forget about that restaurant everyone's been talking about or the book 
                            that's perfect for your taste.
                        </p>

                        <div className="flex justify-center py-4">
                            <Image
                                src="/NotedScreenshot2.png"
                                alt="Noted Recommendations"
                                width={500}
                                height={250}
                                className="w-11/12 md:w-2/3 h-auto"
                            />
                        </div>

                        <p className="p-4">
                            The recommendation engine is where Noted truly shines. By analyzing your past Notes and comparing 
                            them with users who have similar taste patterns, our algorithm generates suggestions with remarkable 
                            precision. The more you use Noted, the smarter it gets at predicting what you'll enjoy.
                        </p>

                        <p className="p-4">
                            We're particularly proud of the Profile page, which serves as a beautifully organized archive of 
                            all your past experiences. It's not just a collection of reviews—it's a reflection of your unique 
                            journey through restaurants, books, films, and more.
                        </p>

                        <p className="p-4">
                            As we continue to develop Noted, we're focused on enhancing the social aspects of the platform, 
                            making it even easier to share and discover experiences with friends and like-minded users.
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default NotedPage; 