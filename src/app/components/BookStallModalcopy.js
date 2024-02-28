import {  useMemo, useState } from "react";
import { stallValue } from "../consants/stall";

import BookStallBuy from "./BookStallBuy";
import { Button } from "@/components/ui/button";

// component for table data to get data color and other props
const SlotCell = ({
  slotNum,
  color,
  onClick,
  selectedButton,
  colSpan,

  rowSpan,
}) => {
  let cellColor = color; // Default to original color

  if (selectedButton === "premiumStall") {
    if (color !== "bg-[#BE514B]") {
      cellColor = "bg-gray-300"; // Set to gray if not premium color
    }
  } else if (selectedButton === "basicStall1") {
    if (color !== "bg-[#64A2AC]") {
      cellColor = "bg-gray-300"; // Set to gray if not basicStall1 color
    }
  } else if (selectedButton === "basicStall2") {
    if (color !== "bg-[#D8E4BC]") {
      cellColor = "bg-gray-300"; // Set to gray if not basicStall1 color
    }
  } else if (selectedButton !== "viewAll" && color !== selectedButton) {
    cellColor = "bg-gray-300"; // Set to gray if not selected stall type
  }

  return (
    <td
      colSpan={colSpan}
      className={` ${cellColor}  ${
        cellColor === "bg-red-600" ? "cursor-not-allowed" : "cursor-pointer"
      }  px-4 py-2  `}
      onClick={onClick}
      rowSpan={rowSpan}
    >
      <a href="#">{slotNum}</a>
    </td>
  );
};

const BookStallModalCopy = ({ open, setOpen }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStallNumber, setSelectedStallNumber] = useState(null);
  const [selectedButton, setSelectedButton] = useState("viewAll");
  const colors = useMemo(() => ["#BE514B", "#64A2AC", "#D8E4BC"], []);

  const handleColorSelection = (slotNum, price) => {
    setSelectedStallNumber(slotNum);
    setSelectedPrice(price);
  };

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className=" text-black shadow-xl ">
      {open && (
        <div
          className="fixed top-[1%]  left-[50%] -translate-x-1/2 overflow-y-auto
        h-[90%] rounded-md bg-white shadow-xl px-5 border md:mt-10 md:py-6  "
        >
          <div className=" mt-4 flex items-center justify-between  md:px-[7.9rem]  ">
            <h1 className="capitalize text-[#333369] text-[1.4rem] md:text-[1.7rem] font-semibold">
              Select a stall to proceed with the booking
            </h1>
            <button
              className="text-[1rem] hover:underline"
              onClick={() => setOpen(!open)}
            >
              Back
            </button>
          </div>
          {/* Button to show the view all premium and basic stalls */}

          <div className="md:mt-6 flex items-center gap-3 md:px-[7.9rem]">
            <Button
              className={`px-4 p-2.5 ${
                selectedButton === "viewAll"
                  ? "bg-[#F8669E] hover:bg-[#C83F74] text-white"
                  : "border border-[#F8669E] bg-transparent text-[#F8669E] hover:text-[#F8669E] hover:bg-transparent"
              }`}
              onClick={() => {
                handleClick("viewAll");
              }}
            >
              View All
            </Button>
            <Button
              className={`px-4 p-2.5 ${
                selectedButton === "basicStall1"
                  ? "bg-[#F8669E] hover:bg-[#C83F74] text-white"
                  : "border border-[#F8669E] bg-transparent text-[#F8669E] hover:text-[#F8669E] hover:bg-transparent"
              }`}
              onClick={() => handleClick("basicStall1")}
            >
              Basic Stall 1
            </Button>
            <Button
              className={`px-4 p-2.5 ${
                selectedButton === "basicStall2"
                  ? "bg-[#F8669E] hover:bg-[#C83F74] text-white"
                  : "border border-[#F8669E] bg-transparent text-[#F8669E] hover:text-[#F8669E] hover:bg-transparent"
              }`}
              onClick={() => handleClick("basicStall2")}
            >
              Basic Stall 2
            </Button>
            <Button
              className={`px-4 p-2.5 ${
                selectedButton === "premiumStall"
                  ? "bg-[#F8669E] hover:bg-[#C83F74] text-white"
                  : "border border-[#F8669E] bg-transparent text-[#F8669E] hover:text-[#F8669E] hover:bg-transparent"
              }`}
              onClick={() => handleClick("premiumStall")}
            >
              Premium Stall
            </Button>
          </div>

          {/* Table Content */}

          <div className="p-4 md:py-10 mr-52 ">
            <div className="lg:w-9/12 lg:m-auto sm:w-full mb-2 px-0 text-center tbls">
              <table className="text-sm table-auto" border="1" width={100}>
                <tr>
                  {stallValue.firstRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                      // handleColorSelection={handleColorSelection}
                    />
                  ))}
                </tr>
                {/* Row for secondRow data */}
                <tr>
                  {stallValue.secondRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.thirdRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.fourthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.fifthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      rowSpan={item.rowSpan}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.sixthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      // color={item.color}
                      slotNum={item.slotNum}
                      border={false}

                      // rowSpan={item.rowSpan}
                    />
                  ))}
                </tr>

                <tr>
                  {stallValue.eighthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.ninthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.tenthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.eleventhRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.twelvethRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>

                <tr>
                  {stallValue.thirtnthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(item.slotNum, item.price)
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
              </table>
            </div>
          </div>
          <div className="mt-5 px-[7.9rem] flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <span className="bg-[#BE514B] h-8 w-8 rounded-lg -mt-10"></span>
              <p className="flex flex-col items-start justify-center text-[#707070]">
                <span className="font-semibold">Premium Stall</span>
                <span>3 X 2 Meter (Font 3m/10ft)</span>
                <span className="font-semibold">35,000INR</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#64A2AC] h-8 w-8 rounded-lg -mt-10"></span>
              <p className="flex flex-col items-start justify-center text-[#707070]">
                <span className="font-semibold">Basic Stall 1</span>
                <span>3 X 2 Meter (Font 3m/10ft)</span>
                <span className="font-semibold">35,000INR</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#D8E4BC] h-8 w-8 rounded-lg -mt-10"></span>
              <p className="flex flex-col items-start justify-center text-[#707070]">
                <span className="font-semibold">Basic Stall 
                2</span>
                <span>3 X 2 Meter (Font 3m/10ft)</span>
                <span className="font-semibold">35,000INR</span>
              </p>
            </div>
            <div className="flex items-center gap-3 -mt-10">
              <span className="bg-red-600 h-8 w-8 rounded-lg  "></span>
              <span>Sold out </span>
            </div>
          </div>

          <BookStallBuy
            selectedPrice={selectedPrice}
            selectedStallNumber={selectedStallNumber}
          />
        </div>
      )}
    </div>
  );
};

export default BookStallModalCopy;
