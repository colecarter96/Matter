import Link from "next/link";

const Header = () => {

    return(
        <div>
            <div className="bg-black">
                asdf
            </div>
            <header className="flex justify-center items-center pt-4 pb-4 px-6 text-white bg-black lg:bg-white lg:text-black">
            
            <h1 className="text-3xl font-bold">
            <Link href="/">Matter.</Link>
            </h1>
            
        </header>
        </div>
        
    );
}

export default Header;