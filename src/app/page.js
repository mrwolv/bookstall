import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookStall from "./components/BookStall/BookStall";
import Provided from "./components/Provided";
import Gallery from "./components/Gallery";

import Faq from "./components/Faq";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <BookStall />
      <Provided />
      <Gallery />
      <Faq />
    </main>
  );
}
