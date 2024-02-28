import React from "react";

const ProductModal = ({setProductModalOpen}) => {
  return (
    <section>
      <div className=" mt-4 flex items-center justify-between  md:px-[7.9rem]  ">
        <h1 className="capitalize text-[#333369] text-[1.4rem] md:text-[1.7rem] font-semibold">
          Select a stall to proceed with the booking
        </h1>
        <button
          className="text-[1rem] hover:underline"
          onClick={() => setProductModalOpen(false)}
        >
          Skip
        </button>
      </div>
    </section>
  );
};

export default ProductModal;
