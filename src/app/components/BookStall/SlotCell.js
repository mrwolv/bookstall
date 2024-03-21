"use client";

import React, { useState, useEffect } from "react";

const SlotCell = ({
  slotNum,
  color,
  onClick,
  selectedButton,
  colSpan,
  rowSpan,
  id,
  isSelected,
}) => {
  const [isSold, setIsSold] = useState(false);

//   const apiUrl = process.env.API_URL
//   console.log(apiUrl);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await fetch(`/api/bookingdata`);
        const data = await res.json();
        // Check if the slotNum exists in the fetched data
        const stallExists = data.result.some(
          (item) => item.selectedStallNumber === slotNum
        );
        setIsSold(stallExists);
      } catch (error) {
        console.log(error);
      }
    }; // Adjust the debounce delay as needed

    fetchData();

    // Clean up function to cancel pending fetch requests
  }, [slotNum]);

  // Determine cell color based on selectedButton and isSold state
  let cellColor = color;
  if (selectedButton !== "viewAll" && color !== selectedButton) {
    cellColor = "bg-gray-300 text-gray-300"; // Set to gray if not selected stall type
  }

  return (
    <td
      colSpan={colSpan}
      key={id}
      className={` ${
        isSold ? "bg-red-500 text-white hover:cursor-not-allowed" : cellColor
      } ${
        selectedButton === "premiumStall" ||
        selectedButton === "basicStall2" ||
        selectedButton === "basicStall1"
          ? "cursor-not-allowed"
          : "cursor-pointer"
      } px-2 py-1  md:px-4 text-black md:py-2 ${
        isSelected ? "bg-black  text-white " : ""
      }
        ${
          cellColor === "bg-white text-white"
            ? "hover:cursor-not-allowed"
            : "hover:cursor-pointer"
        }`}
      onClick={onClick}
      rowSpan={rowSpan}
    >
      <a href="#">{isSold ? "Sold" : slotNum}</a>
    </td>
  );
};

export default SlotCell;
