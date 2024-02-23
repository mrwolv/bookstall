import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="md:m-10 mt-5">
      <div className="px-5 flex flex-col md:flex-row md:items-center  md:gap-10 ">
        <Image
          src="/headerImage.jpg"
          alt="fare Image"
          width={450}
          height={400}
          className="rounded-md md:h-[527px] md:w-[748px] "
        />
        <div className="mt-4 md:mt-0 flex flex-col md:px-20  ">
          <div className="flex flex-col gap-4 md:gap-3 md:px-4">
            <h1 className="text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
              Women Led One-day exhibition
            </h1>
            <p className="text-[#707070]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reprehenderit recusandae officiis placeat ducimus et dignissimos
              numquam quam ratione expedita?
            </p>
          </div>
          <div className="mt-5 md:px-4 md:mt-10 flex items-center  gap-8 ">
            <FaCalendar size={45} color="#333369" />
            <p className="flex flex-col items-center justify-center">
              <p className="text-[1.6rem] md:text-[1.7rem] text-[#333369] font-semibold">
                <span>05</span>
                <span>.</span>
                <span>04</span>
                <span>.</span>
                <span>2024</span>
              </p>
              <span className="  text-medium md:text-[1rem] text-[#333369]">
                Shagun Farm delhi
              </span>
            </p>
          </div>
          <div className=" mt-8 md:px-5 flex items-center gap-5 ">
            <Button className="bg-[#F8669E] hover:bg-[#C83F74]">
              Explore Stalls
            </Button>
            <Button
              variant="outline"
              className="border-[#F8669E] text-[#F8669E] hover:text-[#F8669E] hover:bg-inherit"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
