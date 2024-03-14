import BookStallTable from "./BookStallTable";
import ProductModal from "../Products/ProductModal";

import { useShoppingCart } from "@/app/contexts/ProductContext";

// component for table data to get data color and other props


const BookStallModalCopy = () => {
  const { productModalOpen, openModal } = useShoppingCart();

  return (
    <div className=" text-black shadow-xl ">
      {openModal && (
        <section
          className="  fixed top-[5%] px-10 md:px-0 md:top-[2%]  left-[50%] -translate-x-1/2 -translate-y-11/2 overflow-y-auto
        h-[90%] md:h-[95%] rounded-md bg-white shadow-xl  border  md:w-[80%]  
        
        
        "
        >
          {productModalOpen ? (
            <>
              <ProductModal />
            </>
          ) : (
            <BookStallTable />
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
