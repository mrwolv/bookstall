import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingCircle } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";

const Provided = () => {
  return (
    <section className=" mt-8 px-10 md:mx-20 container ">
      <div className=" flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
        <div className="md:flex md:flex-col md:items-start md:justify-between md:gap-4 md:px-[6rem] ">
          <h1 className="text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
            Amenities Provided
          </h1>
          <p className="text-[1rem] text-[#707070] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            repellat quidem voluptas ipsa nobis laudantium doloribus molestias
            fuga accusantium sunt.
          </p>
        </div>

        <div className="grid grid-cols-2 md:mx-20  ">
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap ">
            <div className="grid gap-2">
              <TbAirConditioning size={50} color="#F8669E" />
              <span className="text-[#707070] ">Air Conditiner</span>
            </div>
            <div className="grid gap-2">
              <LuSofa size={50} color="#F8669E" />
              <span className="text-[#707070]">Sitting</span>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap  ">
            <div className="grid gap-2">
              <LuParkingCircle size={50} color="#F8669E" />
              <span className="text-[#707070] ">Free Parking</span>
            </div>
            <div className="grid gap-2">
              <IoFastFoodOutline size={50} color="#F8669E" />
              <span className="text-[#707070]">Food & Beavrage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provided;
