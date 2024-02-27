"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import BookStallModalCopy from "./BookStallModalcopy";

const BookStall = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className=" bg-[rgb(243,243,243)] py-5 ">
      <div className="px-5 mt-4 md:px-16 ">
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="mt-4 capitalize text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
            Book your Stall
          </h1>
          <p className="text-[1rem] text-[#707070]">
            Interested in showcasing your products or services at our event?
            Reserve your stall now!
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-5 md:flex-row  md:items-center md:justify-between   ">
          <div className="flex flex-col gap-3 justify-center">
            <Image
              src="/headerImage.jpg"
              alt="stall image"
              height={412}
              width={412}
              className="rounded-md "
            />
            <h2 className="text-[1.3rem] md:text-[1.6rem] text-[#333369] font-semibold">
              Basic Stall 1
            </h2>
            <p className="flex items-center gap-3 text-[1.1rem]">
              <span className="text-[#C83F74] font-semibold">15,000</span>
              <span className="text-[#707070] ">
                3X2 Meter (Front 3m/10ft){" "}
              </span>
            </p>
            <Button
              className="bg-[#F8669E] hover:bg-[#F8669E] w-24"
              onClick={() => setOpen(true)}
            >
              Book now
            </Button>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <Image
              src="/headerImage.jpg"
              alt="stall image"
              height={412}
              width={412}
              className="rounded-md "
            />
            <h2 className="text-[1.3rem] md:text-[1.6rem] text-[#333369] font-semibold">
              Basic Stall 1
            </h2>
            <p className="flex items-center gap-3 text-[1.1rem]">
              <span className="text-[#C83F74] font-semibold">15,000</span>
              <span className="text-[#707070] ">
                3X2 Meter (Front 3m/10ft){" "}
              </span>
            </p>
            <Button
              className="bg-[#F8669E] hover:bg-[#F8669E] w-24"
              onClick={() => setOpen(true)}
            >
              Book now
            </Button>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <Image
              src="/headerImage.jpg"
              alt="stall image"
              height={412}
              width={412}
              className="rounded-md "
            />
            <h2 className="text-[1.3rem] md:text-[1.6rem] text-[#333369] font-semibold">
              Basic Stall 1
            </h2>
            <p className="flex items-center gap-3 text-[1.1rem]">
              <span className="text-[#C83F74] font-semibold">15,000</span>
              <span className="text-[#707070] ">
                3X2 Meter (Front 3m/10ft){" "}
              </span>
            </p>
            <Button
              className="bg-[#F8669E] hover:bg-[#F8669E] w-24"
              onClick={() => setOpen(true)}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
      <BookStallModalCopy open={open} setOpen={setOpen} />
    </section>
  );
};

export default BookStall;
