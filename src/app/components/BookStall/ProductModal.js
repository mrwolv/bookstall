"use client";

import React, { useState } from "react";
import BookStallFooter from "./BookStallFooter";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "../../constants/stall";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import MakingPaymentButton from "./MakingPaymentButton";

const ProductModal = ({
  setProductModalOpen,
  selectedStallNumber,
  selectedTypeStall,
  productModalOpen,
  setSelectedStallNumber,
  setSelectedPrice,
  setSelectedTypeStall,
  selectedPrice,
}) => {
  const [quantities, setQuantities] = useState({});
  const [addProduct, setAddProduct] = useState(0);

  const [totalPrice, setTotalPrice] = useState(selectedPrice);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleAddProduct = () => {
  //   setAddProduct(addProduct + 1);

  // };

  // const handleSubProduct = () => {
  //   addProduct > 1 ? setAddProduct(addProduct - 1) : setAddProduct(0);

  // };

  // const handleSumProduct = (price) => {
  //   const totalProductPrice = addProduct * price + totalPrice;
  //   setTotalPrice(totalProductPrice);
  // };

  const handleAddProduct = (productId) => {
    console.log(quantities);
    setQuantities((prevQuantities) => ({
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
    console.log(quantities);
  };

  const handleSubProduct = (productId) => {
    if (quantities[productId] >= 1) {
      console.log(quantities);
      setQuantities((prevQuantities) => ({
        [productId]: prevQuantities[productId] - 1,
      }));
      console.log(quantities);
    } else {
      // Remove the product from the quantities object if the quantity is 1
      const { [productId]: removedProduct, ...rest } = prevQuantities;
      setQuantities(rest);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSumProduct = (price, productId) => {
    let totalProductPrice = selectedPrice;

    // Calculate the total price including the price of the selected product
    totalProductPrice = totalPrice + quantities[productId] * price;

    setSelectedPrice(totalProductPrice);
  };

  return (
    <>
      <Dialog>
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
          <DialogTrigger>
            <div className="grid grid-col-2 grid-cols-2 md:grid-cols-3 md:px-10 md:py-12 py-5 ">
              {products.map((product) => (
                <div
                  className="flex items-center justify-between gap-4 border border-[#707070] border-opacity-40 px-5 cursor-pointer md:px-5 rounded-xl"
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                >
                  <Image src={product.imgUrl} alt="" height={100} width={100} />
                  <p className="flex flex-col gap-1 ">
                    <span className="text-[#707070] text-[1.1rem] capitalize ">
                      {" "}
                      {product.clotheName}
                    </span>
                    <span className="text-[#707070] font-bold">
                      {product.price}{" "}
                    </span>
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-[#F8669E] text-[#F8669E] hover:text-[#F8669E] hover:bg-inherit"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </DialogTrigger>
        </section>
        <DialogContent>
          <div className="flex items-center justify-between  gap-20 rounded-lg px-5 md:px-4">
            <Image
              src={selectedProduct && selectedProduct?.imgUrl}
              alt=""
              height={100}
              width={100}
              className="w-52 h-52 object-cover"
            />
            <div className="grid gap-5 text-[#707070]  ">
              <span className=" text-[1.3rem] hover:cursor-pointer  ">
                {selectedProduct && selectedProduct?.clotheName}
              </span>
              <p className="flex items-center justify-between gap-5 text-[1.2rem] ">
                <span
                  className="px-4 py-1 border border-gray-300 rounded-md hover:cursor-pointer  "
                  onClick={() =>
                    handleSubProduct(selectedProduct && selectedProduct?.id)
                  }
                >
                  {" "}
                  -{" "}
                </span>
                <span className="">
                  {quantities[selectedProduct?.id] || 0} {/* {addProduct} */}
                </span>
                <span
                  className="px-4 py-1 border border-gray-300 rounded-md hover:cursor-pointer "
                  onClick={() =>
                    handleAddProduct(selectedProduct && selectedProduct?.id)
                  }
                >
                  {" "}
                  +{" "}
                </span>
              </p>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-[#F8669E] hover:bg-[#C83F74] mt-2 px-8 py-3"
                  onClick={() =>
                    handleSumProduct(
                      selectedProduct && selectedProduct?.price,
                      selectedProduct && selectedProduct?.id
                    )
                  }
                >
                  Add cart
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
            <MakingPaymentButton selectedPrice={selectedPrice} selectedStallNumber={selectedStallNumber} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProductModal;
