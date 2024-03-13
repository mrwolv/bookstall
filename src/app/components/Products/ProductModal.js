"use client";

import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "react-modern-drawer/dist/index.css";

import { useShoppingCart } from "@/app/contexts/ProductContext";
import BookStallFooter from "../BookStall/BookStallFooter";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const ProductModal = () => {
  const {
    toggleDrawer,
    products,
    setProductModalOpen,
    selectedPrice,
    setSelectedPrice,
    handleAddToCart,
    cartItems,
  } = useShoppingCart();
  const [quantities, setQuantities] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState();
  const [totalPrice, setTotalPrice] = useState(selectedPrice);

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

  const handleProductClick = (product, id) => {
    if (selectedProductId !== id) {
      setSelectedProduct(product);
      setSelectedProductId(product.id);
    }
  };

  const handleSumProduct = (price, productId) => {
    let totalProductPrice = selectedPrice;

    // Calculate the total price including the price of the selected product
    totalProductPrice = totalPrice + quantities[productId] * price;

    setSelectedPrice(totalProductPrice);
  };

  return (
    <>
      <section className="md:mt-5 mt-5 ">
        <div className=" mt-4 flex items-center justify-between  md:px-[7.9rem] px-10  ">
          <h1 className="capitalize text-[#333369] text-[1.1rem] md:text-[1.7rem] font-semibold">
            Add On Products for your Booth!
          </h1>
          <div className="flex items-center justify-between gap-4">
            <button
              className="text-[1rem] hover:underline"
              onClick={() => setProductModalOpen(false)}
            >
              Skip
            </button>
            <div className="relative">
              <FaShoppingCart
                size={28}
                color="#F8669E"
                className="hover:cursor-pointer"
                onClick={toggleDrawer}
              />
              <span className="absolute bg-[#F8669E] rounded-full text-center  h-6 w-6 text-white bottom-[60%] left-[40%] ">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-col-2 grid-cols-2 md:grid-cols-3 md:px-10 md:py-12 py-5 ">
          {products &&
            products?.map((product) => (
              <div
                className={`flex items-center justify-between gap-4 border border-[#707070] border-opacity-40 px-5 cursor-pointer md:px-5 md:py-5 rounded-xl  `}
                key={product.id}
                onClick={() => handleProductClick(product)}
              >
                <Image
                  src={product.image}
                  alt=""
                  height={100}
                  width={100}
                  className="md:h-24 md:w-24 aspect-auto  object-contain "
                />
                <p className="flex flex-col gap-1 ">
                  <span className="text-[#707070] text-[1.1rem] capitalize ">
                    {" "}
                    {product.title.substr(0, 18)}
                  </span>
                  <span className="text-[#707070] font-bold">
                    {product.price}{" "}
                  </span>
                </p>
                <div>
                  {cartItems.find((item) => item.id === product.id) ? (
                    // If yes, show Remove button
                    <Button
                      variant="outline"
                      className="border-[#F8669E]  bg-dark hover:bg-[#C83F74] text-[#F8669E]  hover:text-white focus:scale-95"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaTrash className="  " />
                    </Button>
                  ) : (
                    // If not, show Add button
                    <Button
                      variant="outline"
                      className="border-[#F8669E]  bg-white hover:bg-[#C83F74] text-[#F8669E]  hover:text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart className=" " />
                    </Button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      <BookStallFooter onClick={toggleDrawer} />
    </>
  );
};

export default ProductModal;
