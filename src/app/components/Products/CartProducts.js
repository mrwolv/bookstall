import { useShoppingCart } from "@/app/contexts/ProductContext";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CartProducts = ({ cartItems }) => {
  const { setIsOpen } = useShoppingCart();
  return (
    <div className="overflow">
      <div className="md:px-4 md:py-5">
        <AiOutlineClose
          color="#F8669E"
          size={25}
          className="hover:cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="md:px-3 md:ml-7 md:py-5">
        <hr className="bg-gray-300 h-[1px] w-[90%] " />
      </div>
      <div className="md:px-10 ">
        {cartItems.map((item) => (
          <div className="flex items-start justify-start gap-16" key={item.id}>
            <div>
              <Image
                src={item.image}
                alt="products image"
                height={100}
                width={100}
              />
            </div>
            <div className="flex flex-col items-end justify-center gap-1 ">
              <div className="flex items-center justify-between gap-4">
                <h1 className="font-mono text-[1.2rem] md:py-2 font-semibold text-start">
                  {item.title.substr(0, 18)}
                </h1>
                <span className="font-bold">{item.price}</span>
              </div>
              <div className=" md:py-2 h-10 w-36 rounded-2xl border  flex items-center justify-center gap-6 text-[1.1rem] select-none">
                <span className="border-r pr-2 active:scale-95 hover:cursor-pointer ">
                  {" "}
                  -{" "}
                </span>

                <span className=""> 4 </span>

                <span className="border-l pl-2 active:scale-95 hover:cursor-pointer">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="md:py-3  ">
                <span className="text-sm  font-semibold hover:underline hover:cursor-pointer text-[#F8669E]">
                  Remove
                </span>
              </div>
              <hr className="w-full h-[1px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
