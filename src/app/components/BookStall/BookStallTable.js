import React from "react";
import { Button } from "@/components/ui/button";
import { stallInfo, stallValue } from "../../constants/stall";
import BookStallFooter from "./BookStallFooter";
import { useShoppingCart } from "@/app/contexts/ProductContext";
import SlotCell from "../BookStall/SlotCell";

const TableViewButton = ({
  selectedButtonType,
  label,
  selectedButton,
  handleClick,
}) => {
  return (
    <Button
      className={`px-4 p-2.5 ${
        selectedButton === selectedButtonType
          ? "bg-[#F8669E] hover:bg-[#C83F74] text-white"
          : "border border-[#F8669E] bg-transparent text-[#F8669E] hover:text-[#F8669E] hover:bg-transparent"
      }`}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

const BookStallTable = () => {
  const {
    setSelectedStallNumber,
    setSelectedPrice,
    setProductModalOpen,
    setSelectedTypeStall,
    selectedStallNumber,
    productModalOpen,
    setOpenModal,
    openModal,
    selectedButton,
    setSelectedButton,
    selectedSlot,
    setSelectedSlot,
  } = useShoppingCart();

  const handleColorSelection = (slotNum, price, color) => {
    setSelectedStallNumber(slotNum);
    setSelectedSlot(slotNum);
    setSelectedPrice(price);
    if (color === "bg-[#BE514B]") {
      setSelectedTypeStall("Premium");
    } else if (color === "bg-[#64A2AC]") {
      setSelectedTypeStall("Basic Stall 1");
    } else {
      setSelectedTypeStall("Basic Stall 2");
    }
  };
  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const handleOpenClick = () => {
    setProductModalOpen(!productModalOpen);
  };

  return (
    <>
      <div className="w-[400px] md:w-auto overflow-auto md:overflow-hidden ml-12 md:ml-0 ">
        {" "}
        <div className=" mt-10 md:mt-4 flex items-center justify-between  md:px-[8.4rem] pl-4   ">
          <h1 className="capitalize text-[#333369] text-[1.1rem] md:text-[1.7rem] font-semibold ">
            Select a stall to proceed with the booking
          </h1>
          <button
            className="text-[1rem] hover:underline"
            onClick={() => setOpenModal(!openModal)}
          >
            Back
          </button>
        </div>
        {/* Button to show the view all premium and basic stalls */}
        <div className="md:mt-6 flex items-center gap-3 md:px-[8.4rem] pl-4 mt-10">
          <TableViewButton
            selectedButtonType="viewAll"
            label="View All"
            selectedButton={selectedButton}
            handleClick={() => handleClick("viewAll")}
          />
          <TableViewButton
            selectedButtonType="premiumStall"
            label="Premium"
            selectedButton={selectedButton}
            handleClick={() => handleClick("premiumStall")}
          />
          <TableViewButton
            selectedButtonType="basicStall1"
            label="Basic Stall 1"
            selectedButton={selectedButton}
            handleClick={() => handleClick("basicStall1")}
          />
          <TableViewButton
            selectedButtonType="basicStall2"
            label="Basic Stall 2"
            selectedButton={selectedButton}
            handleClick={() => handleClick("basicStall2")}
          />
          {/* <Button
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
          </Button> */}
        </div>

        
        {/* Table Content */}
        <div className="p-4 md:py-10 mr-52 ">
          <div className="lg:w-9/12 lg:m-auto w-full mb-2 px-0 text-center tbls">
            <table className="text-sm table-auto" border="1" width={100}>
              <tbody>
                <tr>
                  {stallValue.firstRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      isSelected={selectedSlot === item.slotNum}

                      // handleColorSelection={handleColorSelection}
                    />
                  ))}
                </tr>
                {/* Row for secondRow data */}
                <tr>
                  {stallValue.secondRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.thirdRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.fourthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      colSpan={item.colSpan}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.fifthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      rowSpan={item.rowSpan}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.sixthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      // color={item.color}
                      slotNum={item.slotNum}
                    />
                  ))}
                </tr>

                <tr>
                  {stallValue.eighthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.ninthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.tenthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      // selectedStallNumber={selectedStallNumber}
                      // isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.eleventhRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
                <tr>
                  {stallValue.twelvethRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>

                <tr>
                  {stallValue.thirtnthRow.map((item) => (
                    <SlotCell
                      key={item.id}
                      id={item.id}
                      color={item.color}
                      slotNum={item.slotNum}
                      border={false}
                      onClick={() =>
                        handleColorSelection(
                          item.slotNum,
                          item.price,
                          item.color
                        )
                      }
                      selectedButton={selectedButton}
                      selectedStallNumber={selectedStallNumber}
                      isSelected={selectedSlot === item.slotNum}
                    />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:mt-5 mt-12  px-[7.9rem] flex items-center justify-between gap-10 md:gap-0  ">
          {stallInfo.map((stall) => (
            <div
              className="flex flex-col  justify-center gap-5 md:gap-4  md:flex-row md:items-center "
              key={stall.id}
            >
              <span
                className={`${stall.color} h-8 w-8 rounded-sm  md:rounded-lg md:-mt-10 `}
              ></span>
              <p className="flex flex-col items-start justify-center text-[#707070] ">
                <span className="font-semibold">{stall.stallType}</span>
                <span>{stall.stallSQFt}</span>
                <span className="font-semibold">{stall.stallPrice}</span>
              </p>
            </div>
          ))}

          <div className="flex items-center gap-3 -mt-10">
            <span className="bg-red-600 h-8 w-8 rounded-sm  md:rounded-lg  "></span>
            <span>Sold out </span>
          </div>
        </div>
      </div>
      <BookStallFooter onClick={handleOpenClick} />
    </>
  );
};

export default BookStallTable;
