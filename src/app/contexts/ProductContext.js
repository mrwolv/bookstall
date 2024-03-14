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
  const [totalPrice, setTotalPrice] = useState(selectedPrice);

  //  State for adding cart items
  const [cartItems, setCartItems] = useState([]);

  /* Function to add cart and to remove as well */

  console.log("this is cartitems", cartItems);

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
        const res = await fetch("https://fakestoreapi.com/products  ");
        const data = await res.json();
        console.log(data);
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
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  function handleAddProduct(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === id) {
          const updatedQuantities =
            typeof item.quantities === "number" ? item.quantities + 1 : 0;
          return { ...item, quantities: updatedQuantities };
        } else {
          return item;
        }
      })
    );
  }
  function handleSubProduct(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === id) {
          const updatedQuantities =
            typeof item.quantities === "number"
              ? item.quantities <= 1
                ? 0
                : item.quantities - 1
              : 0;
          return { ...item, quantities: updatedQuantities };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(id) {
    setCartItems((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }

  const calculateTotal = () => {
    let total = selectedPrice;
    cartItems.forEach((item) => {
      total += item.price * item.quantities;
    });
    return total;
  };

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
        toggleModal,
        handleAddProduct,

        handleSubProduct,
        removeItem,
        calculateTotal,
      }}
    >
      {children}
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          // className="md:w-[500px]"
          style={{ width: "500px", overflow: "scroll" }}
          enableOverlay={false}
        >
          <CartProducts cartItems={cartItems} />
        </Drawer>
      )}
    </ShoppingCartContext.Provider>
  );
}
