import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
