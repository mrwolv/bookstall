import Image from "next/image";
import React from "react";
import { partner } from "../constants/stall";

const Partner = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-center mt-4">
        <h1 className="mt-4 text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
          Partners
        </h1>
      </div>
      <ul className="flex flex-wrap gap-4 md:gap-0 md:flex-row items-center justify-between mt-5">
        {partner.map((item) => (
          <li
            key={item.id}
            className="flex  flex-col items-center justify-center gap-3"
          >
            <Image src={item.imgUrl} alt="" height={150} width={150} />
            <span className="text-[#333369]  text-center font-medium  ">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partner;
