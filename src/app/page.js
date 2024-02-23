import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookStall from "./components/BookStall";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <BookStall/>
    </main>
  );
}
