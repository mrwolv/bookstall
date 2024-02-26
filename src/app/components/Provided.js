import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingCircle } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";

const Provided = () => {
  return (
    <section className=" mt-8 px-5 md:px-[12rem]   ">
      <div className=" flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
        <div className="md:flex md:flex-col md:items-start md:justify-between md:gap-4 md:px-[6rem] ">
          <h1 className="text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
            Amenities Provided
          </h1>
          <p className="text-[1rem] text-[#707070] md:pr-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            repellat quidem voluptas ipsa nobis laudantium doloribus molestias
            fuga accusantium sunt.
          </p>
        </div>

        <div className="flex flex-row   px-5   md:flex-col md:mr-10 md:gap-10 md:px-12 md:py-5 ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-20">
            <p className="flex flex-col gap-2 md:gap-4   md:justify-between  ">
              <TbAirConditioning size={50} color="#F8669E" />
              <span className="text-[#707070] ">Air Conditiner</span>
            </p>
            <p className="flex flex-col gap-2 justify-center  ">
              <LuParkingCircle size={50} color="#F8669E" />
              <span className="text-[#707070]">Free Parking</span>
            </p>
          </div>
          <div className="md:flex md:items-center md:justify-between md:gap-20">
            <p className="flex flex-col gap-2 md:gap-4   md:justify-between  ">
              <TbAirConditioning size={50} color="#F8669E" />
              <span className="text-[#707070] ">Air Conditiner</span>
            </p>
            <p className="flex flex-col gap-2 justify-center  ">
              <LuParkingCircle size={50} color="#F8669E" />
              <span className="text-[#707070]">Free Parking</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provided;
