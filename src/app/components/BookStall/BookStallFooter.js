import React from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/app/contexts/ProductContext";
const BookStallFooter = ({onClick}) => {

  const {selectedPrice,selectedStallNumber,selectedTypeStall} = useShoppingCart()

  return (
    <footer className="md:mt-20 mt-10 bg-[#333369] md:h-36 h-auto w-full px-20 md:px-0 mb-10  ">
      <div className="md:px-32 md:py-10 flex  flex-col gap-5 md:flex-row  md:items-center md:justify-between">
        <div className="flex flex-col gap-10 md:flex-row  md:items-center md:justify-between md:gap-16">
          <p className="text-white flex flex-col justify-between gap-2">
            <span className="text-[1.1rem] font-semibold">
              {selectedTypeStall} - {selectedStallNumber}
            </span>
            <span className="text-[1rem]">3 X 2 Meter (Font 3m/10ft)</span>
            <span>Item Selected in cart</span>
          </p>
          <div className="md:h-12 md:w-[1px] w-56 h-[1px]   bg-white"></div>

          <p className="text-white flex flex-col justify-between gap-2">
            <span className="text-[1.1rem] font-semibold capitalize">
              total Amount
            </span>
            <span className="text-[1rem]">Price - {selectedPrice}</span>
          </p> 
        </div>
        <div>
          <Button
            className="bg-[#F8669E] hover:bg-[#F8669E] rounded "
            onClick={onClick}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default BookStallFooter;
