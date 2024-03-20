"use client";

import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

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

  useEffect(() => {
    const fetchData = debounce(async () => {
      try {
        const res = await fetch("http://localhost:3000/api/bookingdata");
        const data = await res.json();
        // Check if the slotNum exists in the fetched data
        const stallExists = data.result.some(
          (item) => item.selectedStallNumber === slotNum
        );
        setIsSold(stallExists);
      } catch (error) {
        console.log(error);
      }
    }, 500); // Adjust the debounce delay as needed

    fetchData();

    // Clean up function to cancel pending fetch requests
    return () => {
      fetchData.cancel();
    };
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
      className={` ${isSold ? "bg-red-500 text-white hover:cursor-not-allowed" : cellColor} ${
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
