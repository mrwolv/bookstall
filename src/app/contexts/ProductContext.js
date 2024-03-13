"use client";

import { createContext, useContext, useEffect, useState } from "react";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CartProducts from "../components/Products/CartProducts";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStallNumber, setSelectedStallNumber] = useState(null);
  const [selectedTypeStall, setSelectedTypeStall] = useState(null);
  //  State for adding cart items
  const [cartItems, setCartItems] = useState([]);

  /* Function to add cart and to remove as well */
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    if (cartItems.find((item) => item.id === product.id)) {
      // If yes, remove it from the cart
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== product.id
      );
      setCartItems(updatedCartItems);
    } else {
      // If not, add it to the cart
      setCartItems([...cartItems, product]);
    }
  };

  useEffect(() => {
    async function handleFetch() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        alert(error);
      }
    }
    handleFetch();
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleModal = () =>{
    setOpenModal(!openModal)
  }
 

  return (
    <ShoppingCartContext.Provider
      value={{
        toggleDrawer,
        products,
        productModalOpen,
        setProductModalOpen,
        selectedPrice,
        setSelectedPrice,
        selectedStallNumber,
        setSelectedStallNumber,
        selectedTypeStall,
        setSelectedTypeStall,
        handleAddToCart,
        cartItems,
        isOpen,
        setIsOpen,
        setOpenModal,
        openModal,
        toggleModal
      }}
    >
      {children}
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          // className="md:w-[500px]"
          style={{ width: "500px",overflow:"scroll" }}
        >
          <CartProducts cartItems={cartItems} />
        </Drawer>
      )}
    </ShoppingCartContext.Provider>
  );
}
