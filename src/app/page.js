import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookStall from "./components/BookStall";
import Provided from "./components/Provided";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <BookStall/>
      <Provided/>
      <Gallery/>
    </main>
  );
}
