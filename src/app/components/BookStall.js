"use client";

import Image from "next/image";
import React, { useState } from "react";
import BookStallModal from "./BookStallModal";

const BookStall = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="mt-6">
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-semibold text-[1.6rem]">Book Stalls</h1>
        <p className="text-customGrey-500 text-[1rem]">
          Interested in showcasing your products or services at our event?
          Reserve your stall now!
        </p>
        {/* This is images divs to book the stall like that for now */}
        <div className=" mt-14 flex md:flex-row items-center justify-between md:gap-5  sm:flex-col ">
          <div className="relative">
            <div className="absolute bg-[#9E005E] top-[10%]  h-10 w-36 rounded-r-xl">
              <span className="text-center text-white flex absolute top-2 left-4">
                Basic stall 1
              </span>
            </div>
            <Image
              src="/pics.jpg"
              height={200}
              width={450}
              alt="this is image of stall"
              className="rounded-lg h-[400px]"
            />
            <div className="flex items-center justify-center mt-5">
              <button
                className="bg-[#9e005e] rounded-full px-4 py-2 outline-none text-white hover:text-[#41CFD1] font-semibold"
                onClick={handleOpen}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bg-[#9E005E] top-[10%]  h-10 w-36 rounded-r-xl">
              <span className="text-center text-white flex absolute top-2 left-4">
                Basic stall 2
              </span>
            </div>
            <Image
              src="/pics.jpg"
              height={200}
              width={450}
              alt="this is image of stall"
              className="rounded-lg h-[400px]"
            />
            <div className="flex items-center justify-center mt-5">
              <button
                className="bg-[#9e005e] rounded-full px-4 py-2 outline-none text-white hover:text-[#41CFD1] font-semibold"
                onClick={handleOpen}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bg-[#9E005E] top-[10%]  h-10 w-36 rounded-r-xl">
              <span className="text-center text-white flex absolute top-2 left-4">
                Premium Stall
              </span>
            </div>
            <Image
              src="/pics.jpg"
              height={200}
              width={450}
              alt="this is image of stall"
              className="rounded-lg h-[400px]"
            />
            <div className="flex items-center justify-center mt-5">
              <button
                className="bg-[#9e005e] rounded-full px-4 py-2 outline-none text-white hover:text-[#41CFD1] font-semibold"
                onClick={handleOpen}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* This is stall table  */}

        <BookStallModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default BookStall;
