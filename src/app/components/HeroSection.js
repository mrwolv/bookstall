import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="md:m-10 md:mx-12 mt-5 container  ">
      <div className="px-5 flex flex-col flex-wrap  lg:flex-nowrap items-center md:flex-row md:items-center md:justify-between md:gap-10   ">
        <Image
          src="/headerImage.jpg"
          priority
          alt="fare Image"
          width={350}
          height={300}
          className="rounded-md md:h-[527px] md:w-[748px] "
          placeholder="empty"
        />
        <div className="mt-4 md:mt-0 flex flex-col md:px-20  ">
          <div className="flex flex-col gap-4 md:gap-3 md:px-4">
            <h1 className="text-textPrimaryColor text-[1.8rem] md:text-[2.1rem] font-bold">
              Women Led One-day exhibition
            </h1>
            <p className="text-textGrayColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reprehenderit recusandae officiis placeat ducimus et dignissimos
              numquam quam ratione expedita?
            </p>
          </div>
          <div className="mt-5 md:px-4 md:mt-10 flex items-center  gap-8 ">
            <FaCalendar size={45} color="#333369" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-[1.6rem] md:text-[1.7rem] text-textPrimaryColor font-semibold">
                <span>05</span>
                <span>.</span>
                <span>04</span>
                <span>.</span>
                <span>2024</span>
              </p>
              <p className="  text-medium md:text-[1rem] text-textPrimaryColor">
                Shagun Farm delhi
              </p>
            </div>
          </div>
          <div className=" mt-8 md:px-5 flex items-center gap-5 ">
            <Button className="bg-primaryColor hover:bg-secondaryColor transition-all ease-in-out scroll-smooth">
              <a href="#stalls">Explore Stalls</a>
            </Button>
            <Button
              variant="outline"
              className="border-primaryColor text-primaryColor hover:text-primaryColor hover:bg-inherit"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
      {/* About women */}
      <div className="mt-10  px-5 md:px-0 md:mt-16 flex flex-col items-center ">
        <h1 className="text-textPrimaryColor text-[1.8rem] md:text-[2.1rem] font-bold md:flex md:items-center  md:justify-center">
          About Women Listed
        </h1>
        <p className="md:w-[750px] w-auto py-4  md:text-[1.1rem]  md:text-center">
          “Women Listed Bazaar” is a Women-Led One-Day Exhibition that aims to
          empower and promote women entrepreneurs, artisans and innovators. With
          a variety of stalls showcasing unique products and services, it will
          give participants an opportunity to grow their businesses & network
          with fellow women entrepreneurs. So, whether you are an established
          business, a social entrepreneur, a start-up business, a Homepreneur,
          eco-artist, or even a Student entrepreneur,you are welcome to be a
          part of the Exhibition.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
