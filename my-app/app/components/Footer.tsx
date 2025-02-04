

const Footer = () => {

    return(
        <footer className="bg-black py-6 text-center text-white">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} Matter. All rights reserved.</p>
                
            </div>
        </footer>
    );
}

export default Footer;