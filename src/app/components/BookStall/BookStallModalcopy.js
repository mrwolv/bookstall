import { useState } from "react";

import BookStallTable from "./BookStallTable";
import ProductModal from "./ProductModal";
import BookStallFooter from "./BookStallFooter";

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
          className="  fixed top-[5%] px-10 md:px-0 md:top-[2%]  left-[50%] -translate-x-1/2 -translate-y-11/2 overflow-y-auto
        h-[90%] md:h-[95%] rounded-md bg-white shadow-xl  border  md:w-[80%]  
        
        
        "
        >
          {productModalOpen ? (
            <>
              <ProductModal
                selectedTypeStall={selectedTypeStall}
                setProductModalOpen={setProductModalOpen}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
              />
            </>
          ) : (
            <BookStallTable
              setOpen={setOpen}
              selectedPrice={selectedPrice}
              selectedStallNumber={selectedStallNumber}
              setSelectedStallNumber={setSelectedStallNumber}
              selectedTypeStall={selectedTypeStall}
              setSelectedTypeStall={setSelectedTypeStall}
              setSelectedPrice={setSelectedPrice}
              productModalOpen={productModalOpen}
              setProductModalOpen={setProductModalOpen}
            />
          )}
          {/* <BookStallFooter
            selectedStallNumber={selectedStallNumber}
            selectedTypeStall={selectedTypeStall}
            setProductModalOpen={setProductModalOpen}
            productModalOpen={productModalOpen}
          /> */}
        </section>
      )}
    </div>
  );
};

export default BookStallModalCopy;
