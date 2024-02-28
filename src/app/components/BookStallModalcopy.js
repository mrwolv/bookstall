import { useMemo, useState } from "react";
import { stallInfo, stallValue } from "../consants/stall";

import BookStallBuy from "./BookStallBuy";
import { Button } from "@/components/ui/button";
import BookStallTable from "./BookStallTable";
import ProductModal from "./ProductModal";

// component for table data to get data color and other props

const BookStallModalCopy = ({ open, setOpen }) => {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStallNumber, setSelectedStallNumber] = useState(null);
  const [selectedTypeStall, setSelectedTypeStall] = useState(null);

  return (
    <div className=" text-black shadow-xl ">
      {open && (
        <section
          className="  fixed top-[10%] px-10 md:px-0 md:top-[2%]  left-[50%] -translate-x-1/2 overflow-y-auto
        h-[90%] rounded-md bg-white shadow-xl  border md:mt-10  
        
        
        "
        >
          {productModalOpen ? (
            <>
              <ProductModal setProductModalOpen={setProductModalOpen} />
            </>
          ) : (
            <BookStallTable
              setOpen={setOpen}
              setSelectedStallNumber={setSelectedStallNumber}
              setSelectedTypeStall={setSelectedTypeStall}
              setSelectedPrice={setSelectedPrice}
            />
          )}
          <footer className="md:mt-5 mt-10 bg-[#333369] md:h-36 h-auto w-full px-20 md:px-0 mb-10  md:mb-0">
            <div className="md:px-32 md:py-10 flex  flex-col gap-5 md:flex-row  md:items-center md:justify-between">
              <div className="flex flex-col gap-10 md:flex-row  md:items-center md:justify-between md:gap-16">
                <p className="text-white flex flex-col justify-between gap-2">
                  <span className="text-[1.1rem] font-semibold">
                    {selectedTypeStall} - {selectedStallNumber}
                  </span>
                  <span className="text-[1rem]">
                    3 X 2 Meter (Font 3m/10ft)
                  </span>
                </p>
                <div className="md:h-12 md:w-[1px] w-56 h-[1px]   bg-white"></div>

                <p className="text-white flex flex-col justify-between gap-2">
                  <span className="text-[1.1rem] font-semibold capitalize">
                    total Amount
                  </span>
                  <span className="text-[1rem]">Price</span>
                </p>
              </div>
              <div>
                <Button
                  className="bg-[#F8669E] hover:bg-[#F8669E] rounded "
                  onClick={() => setProductModalOpen(!productModalOpen)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </footer>
        </section>
      )}
    </div>
  );
};

export default BookStallModalCopy;
