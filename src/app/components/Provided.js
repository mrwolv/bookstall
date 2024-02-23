import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingCircle } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";

const Provided = () => {
  return (
    <div className="px-5 mt-8 md:mx-20 flex flex-col md:flex-row gap-5 md:items-center ">
      <div className="md:px-52">
        <h1 className="text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
          Amenities Provided
        </h1>
        <p className="text-[1rem] text-[#707070] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          repellat quidem voluptas ipsa nobis laudantium doloribus molestias
          fuga accusantium sunt.
        </p>
      </div>
      <div className="grid grid-cols-2 md:justify-center md:gap-12 gap-2  px-2 md:px-10">
        <p className="flex flex-col gap-2 justify-center">
          <TbAirConditioning size={50} color="#F8669E" />
          <span className="text-[#707070]">Air Conditiner</span>
        </p>
        <p className="flex flex-col gap-2 justify-center">
          <LuParkingCircle size={50} color="#F8669E" />
          <span className="text-[#707070]">Free Parking</span>
        </p>
        <p className="flex flex-col gap-2 justify-center">
          <IoFastFoodOutline size={50} color="#F8669E" />
          <span className="text-[#707070]">Food & Drinks</span>
        </p>
        <p className="flex flex-col gap-2 justify-center">
          <LuSofa size={50} color="#F8669E" />
          <span className="text-[#707070]">Bussiness Lounge </span>
        </p>
      </div>
    </div>
  );
};

export default Provided;
