import React from "react";
import { FaPhone } from "react-icons/fa";

const Connect = () => {
  return (
    <section className="bg-[#333369] mt-5 ">
      <div className="md:mx-8 mx-2 py-14 md:px-10 flex flex-col gap-5 md:gap-0 items-center justify-between md:flex-row">
        <h1 className="mt-4 text-white text-[1.8rem] md:text-[2.1rem] font-bold">
          Connect With Us!
        </h1>

        <div className="">
          <p className="flex flex-col items-center gap-2">
            <FaPhone color="#F8669E" size={25} />
            <span className="text-white">Phone</span>
            <span className="text-white">98732974923794</span>
          </p>
        </div>
        <div className="w-10/12 h-[1px] md:h-20 md:w-[1px] bg-[#F8669E]"></div>
        <div className="">
          <p className="flex flex-col items-center gap-2">
            <FaPhone color="#F8669E" size={25} />
            <span className="text-white">Phone</span>
            <span className="text-white">98732974923794</span>
          </p>
        </div>
        <div className="w-10/12 h-[1px] md:h-20 md:w-[1px] bg-[#F8669E]"></div>
        <div className="">
          <p className="flex flex-col items-center gap-2">
            <FaPhone color="#F8669E" size={25} />
            <span className="text-white">Phone</span>
            <span className="text-white">98732974923794</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;
