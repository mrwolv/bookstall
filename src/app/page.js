import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookStall from "./components/BookStall/BookStall";
import Provided from "./components/Provided";
import Gallery from "./components/Gallery";

import Faq from "./components/Faq";
import Partner from "./components/Partner";
import ConnectComponent from "./components/ConnectComponent";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <BookStall />
      <Provided />
      <Gallery />
      <Faq />
      <Partner />
      <ConnectComponent />
    </main>
  );
}
