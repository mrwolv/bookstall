import React from "react";
import BookStallFooter from "./BookStallFooter";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "../consants/stall";

const ProductModal = ({
  setProductModalOpen,
  setSelectedStallNumber,
  setSelectedPrice,
  setSelectedTypeStall,
}) => {
  return (
    <section className="md:mt-5 mt-5 ">
      <div className=" mt-4 flex items-center justify-between  md:px-[7.9rem] px-10  ">
        <h1 className="capitalize text-[#333369] text-[1.1rem] md:text-[1.7rem] font-semibold">
          Add On Products for your Booth!
        </h1>
        <button
          className="text-[1rem] hover:underline"
          onClick={() => setProductModalOpen(false)}
        >
          Skip
        </button>
      </div>
      <div className=" grid md:grid-cols-3 grid-col-1 md:px-10 md:py-12 py-5 ">
        {products.map((product) => (
          <div
            className="flex items-center justify-between gap-4 border border-[#707070] border-opacity-40 px-5
            cursor-pointer
            md:px-5 rounded-xl"
            key={product.id}
          >
            <Image src={product.imgUrl} alt="" height={100} width={100} />
            <p className="flex flex-col gap-1 ">
              <span className="text-[#707070] text-[1.1rem] capitalize ">
                {" "}
                {product.clotheName}
              </span>
              <span className="text-[#707070] font-bold">{product.price} </span>
            </p>
            <Button
              variant="outline"
              className="border-[#F8669E] text-[#F8669E] hover:text-[#F8669E] hover:bg-inherit"
            >
              Add
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductModal;
{
  /* Products modal to add more Quantities    */
}
{
  /* <div className="flex items-center justify-between border border-gray-400 rounded-lg px-4 md:px-10 ">
  <Image src="/clothImage.jpg" alt="" height={100} width={100} />
  <div className="flex  flex-col gap-2 justify-center ">
    <span className="text-[]">Clothe</span>
    <p>
      <span> -</span>
      <span>1</span>
      <span>+</span>
    </p>
    <Button>Add Cart</Button>
  </div>
</div> */
}
