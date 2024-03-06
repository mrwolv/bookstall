import { useEffect, useMemo, useState } from "react";
import { stallValue } from "@/app/constant/stall";

import BookStallBuy from "../app/components/BookStall/BookStallBuy";
import { Button } from "@/components/ui/button";

// component for table data to get data color and other props
const SlotCell = ({ slotNum, color, onClick, colSpan, border, rowSpan }) => {
  return (
    <td
      colSpan={colSpan}
      className={` ${color}  ${
        color === "bg-red-600" ? "cursor-not-allowed" : "cursor-pointer"
      } ${border ? "" : "border-b border-black"} px-4 py-2  `}
      onClick={onClick}
      rowSpan={rowSpan}
    >
      <a href="#">{slotNum}</a>
    </td>
  );
};

const BookStallModal = ({ open, setOpen }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStallNumber, setSelectedStallNumber] = useState(null);
  const [selectedButton, setSelectedButton] = useState("viewAll");
  const colors = useMemo(() => ["#BE514B", "#64A2AC", "#D8E4BC"], []);
  const [currentColor, setCurrentColor] = useState(null); // Initially choose a random color

  useEffect(() => {
    // Update currentColor only if selectedButton is "viewAll"
    if (selectedButton === "viewAll") {
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    }
  }, [selectedButton, colors]);

  const handleColorSelection = (color, price, slotNum) => {
    setSelectedColor(color);
    setSelectedPrice(price);
    setSelectedStallNumber(slotNum);
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
                {/* First table */}
            <tr>
                  <SlotCell
                    color={
                      selectedButton === "viewAll"
                        ? `bg-[${currentColor}]`
                        : "bg-gray-400"
                    }
                    stallType="premium"
                    slotNum={94}
                    colSpan="2"
                    onClick={() =>
                      handleColorSelection("#BE514B", "$10", 94, "premium")
                    }
                  />

                  <SlotCell
                    color={
                      selectedButton === "premiumStall"
                        ? "bg-gray-400"
                        : selectedButton === "basicStall1"
                        ? "bg-[#64A2AC]"
                        : selectedButton === "basicStall2"
                        ? "bg-gray-400"
                        : "bg-gray-400"
                    }
                    slotNum={95}
                    onClick={() => handleColorSelection("#64A2AC", "$20", 95)}
                  />
                  <SlotCell
                    color="bg-red-600"
                    slotNum={96}
                    onClick={() =>
                      handleColorSelection("bg-red-600", "$30", 96)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={97}
                    onClick={() => handleColorSelection("#D8E4BC", "$20", 97)}
                  />
                  <SlotCell
                    color="bg-red-600"
                    slotNum={98}
                    onClick={() =>
                      handleColorSelection("bg-red-600", "$30", 98)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC]"
                    slotNum={99}
                    onClick={() => handleColorSelection("#64A2AC", "$20", 99)}
                  />
                  <td
                    className="bg-[#dc2626] border-b border-black basic"
                    colSpan={2}
                  >
                    <a href="#">Media01</a>
                  </td>
                  <td className="bg-[#dc2626] border-b border-black premium basic2">
                    <a href="#">Media02</a>
                  </td>
                  <SlotCell
                    color="bg-[#64A2AC]"
                    slotNum={100}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]", "$30", 100)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={101}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 101)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={102}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 102)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={103}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 103)
                    }
                  />

                  <SlotCell
                    color="bg-[#64A2AC]"
                    slotNum={100}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]", "$30", 104)
                    }
                  />
                  <SlotCell
                    color="bg-[#BE514B]"
                    slotNum={105}
                    colSpan="2"
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 105)
                    }
                  />
                </tr> 
              
               
                {/* Second row */}
                <tr>
                  <SlotCell color="bg-[#BE514B]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell
                    color="bg-[#FFFF00]"
                    border="false"
                    colSpan={2}
                    slotNum="Phase3"
                  />

                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />

                  <SlotCell color="bg-[#BE514B]" />
                </tr>
                {/* third row */}
                <tr>
                  <SlotCell
                    color="bg-[#64A2AC]"
                    slotNum={93}
                    border={true}
                    onClick={() => handleColorSelection("bg-[#64A2AC]", "$30")}
                  />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell
                    color="bg-[#FFFF00]"
                    border="false"
                    slotNum={"FoodArea"}
                  />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell
                    color="bg-[#64A2AC]"
                    border="false"
                    slotNum={106}
                    onClick={() => handleColorSelection("bg-[#64A2AC]", "$30")}
                  />
                </tr>
                {/* Fourth row */}

                <tr>
                  <SlotCell color="bg-red-600" slotNum={92} />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell
                    color="bg-[#00FF01] "
                    slotNum={91}
                    onClick={() =>
                      handleColorSelection("bg-[#00FF01]", "$30", 91)
                    }
                  />
                  <SlotCell
                    color="bg-[#dc2626]"
                    slotNum={90}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell
                    color="bg-[#dc2626]"
                    slotNum={89}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell
                    color="bg-[#dc2626]"
                    slotNum={88}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={87} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={86}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 86)
                    }
                  />
                  <SlotCell
                    color="bg-[#BE514B] "
                    slotNum={85}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 85)
                    }
                  />
                  <td className=""></td>{" "}
                  <SlotCell
                    color="bg-[#dc2626]"
                    slotNum={112}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={111}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 111)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={110}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 110)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={109}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 109)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={108}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 108)
                    }
                  />
                  <SlotCell color="bg-[#FFFF00]" border="false" />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={107}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 107)
                    }
                  />
                </tr>

                {/* Fifth row */}

                <tr>
                  <SlotCell color="bg-[#dc2626]" slotNum={"12A"} rowSpan="2" />
                  <td rowSpan={8}></td>
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={48}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 48)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={47}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 47)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={46}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 46)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={45} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={44}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 44)
                    }
                  />
                  <SlotCell
                    color="bg-[#BE514B] "
                    slotNum={43}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 43)
                    }
                  />
                  <SlotCell
                    color="bg-[#BE514B] "
                    slotNum={42}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 42)
                    }
                  />
                  <td className=""></td>{" "}
                  <SlotCell color="bg-red-600" slotNum={80} />
                  <SlotCell color="bg-[#dc2626]" slotNum={81} />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={82}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 82)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={83}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 83)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={84}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 84)
                    }
                  />
                  <SlotCell color="bg-[#79AE58]" />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={59}
                    rowSpan={2}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 59)
                    }
                  />
                </tr>
                <tr>
                  {/* <td className="premium bg-[#dc2626]text-white " rowSpan={2}>
                    12A
                  </td> */}
                  {/* <td rowSpan={8}></td> */}
                  <td className="  premium border-b border-black"></td>
                  <td className=" premium"></td>
                  <td className="  premium font-semibold"> Phase1 </td>
                  <td className=" premium"></td>
                  <td className=" premium"></td>
                  <td className="  premium "> </td>
                  <td className=" text-white  premium "></td>
                  <td className=""></td>{" "}
                  <td className="bg-[#79AE58] text-white "></td>{" "}
                  <td className=" bg-[#79AE58] premium"></td>
                  <td className="bg-[#79AE58] font-semibold premium">Phase2</td>
                  <td className=" bg-[#79AE58] premium"></td>
                  <td className=" bg-[#79AE58] premium"></td>
                  <td className=" bg-[#79AE58] premium"></td>
                </tr>
                {/* 7 row */}
                <tr>
                  <SlotCell color="bg-[#dc2626]" slotNum={12} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={35}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 35)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={36} />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={37}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 37)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={38} />
                  <SlotCell color="bg-[#dc2626]" slotNum={39} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={40}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 40)
                    }
                  />
                  <SlotCell
                    color="bg-[#00FF01]"
                    slotNum={41}
                    onClick={() =>
                      handleColorSelection("bg-[#00FF01] ", "$30", 41)
                    }
                  />
                  <td className=""></td>{" "}
                  <SlotCell color="bg-[#dc2626]" slotNum={79} />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={78}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 78)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={77}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 77)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={76}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 76)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={75}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 75)
                    }
                  />
                  <td className="bg-[#79AE58]  premium "></td>
                  <SlotCell
                    color="bg-[#64A2AC]   "
                    slotNum={58}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 58)
                    }
                  />
                </tr>
                {/* 8 row */}

                <tr>
                  <SlotCell color="bg-[#dc2626]" slotNum={11} />
                  <SlotCell
                    color="bg-[#64A2AC]   "
                    slotNum={34}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 34)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={33} />
                  <SlotCell
                    color="bg-[#D8E4BC]   "
                    slotNum={32}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 32)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]   "
                    slotNum={31}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 31)
                    }
                  />
                  <SlotCell
                    color="bg-[#00FF01] "
                    slotNum={30}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 30)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC]   "
                    slotNum={29}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 29)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={28} />
                  <td className=""></td>{" "}
                  <SlotCell color="bg-[#dc2626]" slotNum={70} />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={71}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 71)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={72}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 72)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={73}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 73)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={73}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]  ", "$30", 73)
                    }
                  />
                  <td className="bg-[#79AE58]  premium "></td>
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={57}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC] ", "$30", 57)
                    }
                  />
                </tr>

                {/* 9 r0w */}
                <tr>
                  <SlotCell color="bg-[#dc2626]" slotNum={10} rowSpan={2} />
                  <td className="  premium border-b border-black"></td>
                  <td className="  premium border-b border-black"></td>
                  <td className=" premium border-b border-black font-semibold">
                    Phase1
                  </td>
                  <td className=" premium border-b border-black"></td>
                  <td className=" premium border-b border-black"></td>
                  <td className=" text-white  premium border-b border-black "></td>
                  <td className=" text-white  premium border-b border-black "></td>
                  <td className=""></td>{" "}
                  <td className="bg-[#dc2626]premium text-white  border-b border-black"></td>{" "}
                  <td className="bg-[#79AE58]  premium border-b border-black font-semibold">
                    Phase2
                  </td>
                  <td className="bg-[#79AE58]  premium border-b border-black"></td>
                  <td className="bg-[#79AE58]    premium border-b border-black"></td>
                  <td className="bg-[#79AE58]  premium border-b border-black"></td>
                  <td className="bg-[#79AE58]  premium"></td>
                  <SlotCell
                    color="bg-[#64A2AC] "
                    rowSpan={2}
                    slotNum={59}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]  ", "$30", 59)
                    }
                  />
                </tr>

                {/* 10 row */}
                <tr>
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={21}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]  ", "$30", 21)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={22} />
                  <SlotCell color="bg-[#dc2626]" slotNum={23} />
                  <SlotCell
                    color="bg-[#00FF01] "
                    slotNum={24}
                    onClick={() =>
                      handleColorSelection("bg-[#00FF01]  ", "$30", 24)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={25} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={26}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]  ", "$30", 26)
                    }
                  />
                  <SlotCell
                    color="bg-[#BE514B] "
                    slotNum={27}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B] ", "$30", 27)
                    }
                  />
                  <td className=""></td>{" "}
                  <SlotCell
                    color="bg-[#00FF01] "
                    slotNum={69}
                    onClick={() =>
                      handleColorSelection("bg-[#00FF01]  ", "$30", 69)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={68}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]  ", "$30", 68)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={67}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]  ", "$30", 67)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={66}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]  ", "$30", 66)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={65}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 65)
                    }
                  />
                  <td className="bg-[#79AE58]  premium"></td>
                </tr>
                {/* 10 row */}
                <tr>
                  <SlotCell color="bg-[#dc2626]" slotNum={9} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={20}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 20)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={19}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 19)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={18}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]  ", "$30", 18)
                    }
                  />
                  <SlotCell
                    color="bg-[#BE514B]  "
                    slotNum={17}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]   ", "$30", 17)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={16}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 16)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={15}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 15)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={14}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 14)
                    }
                  />
                  <td className=""></td>{" "}
                  <SlotCell color="bg-[#dc2626]" slotNum={60} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={61}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 61)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={62}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]   ", "$30", 62)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]  "
                    slotNum={63}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]   ", "$30", 63)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]  "
                    slotNum={64}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]   ", "$30", 64)
                    }
                  />
                  <td className="bg-[#79AE58]  premium "></td>
                  <SlotCell
                    color="bg-[#D8E4BC]  "
                    slotNum={55}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]   ", "$30", 55)
                    }
                  />
                </tr>

                {/* 11 row */}
                <tr>
                  <td className="premium bdr bg-[#BE514B] "></td>
                  <td className=" premium "></td>
                  <td className=" premium "></td>
                  <td className=" premium font-semibold">Phase1</td>
                  <td className="  premium "></td>
                  <td className="premium "></td>
                  <td className=" premium "></td>
                  <td className=" text-white  premium  "></td>
                  <td className=""></td>{" "}
                  <td className=" bg-[#79AE58] premium text-white  "></td>{" "}
                  <td className="bg-[#79AE58] premium font-semibold ">
                    Phase2
                  </td>
                  <td className="bg-[#79AE58] premium "></td>
                  <td className="bg-[#79AE58]  premium "></td>
                  <td className="bg-[#79AE58] premium "></td>
                  <td className="bg-[#79AE58]  premium "></td>
                  <td className="  bg-[#BE514B]  premium "></td>
                </tr>

                {/* 12 row */}
                <tr>
                  <SlotCell
                    color="bg-[#BE514B]  "
                    slotNum={8}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 8)
                    }
                    colSpan={2}
                  />
                  <SlotCell
                    color="bg-[#BE514B]  "
                    slotNum={7}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 7)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC]   "
                    slotNum={6}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]    ", "$30", 6)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC]   "
                    slotNum={5}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]    ", "$30", 5)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]  "
                    slotNum={4}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 4)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={3}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 3)
                    }
                  />
                  <SlotCell color="bg-[#dc2626]" slotNum={2} />
                  <SlotCell
                    color="bg-[#BE514B] "
                    slotNum={1}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B] ", "$30", 1)
                    }
                  />
                  <td className=""></td>{" "}
                  <SlotCell
                    color="bg-[#BE514B] "
                    slotNum={49}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B] ", "$30", 49)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={50}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 50)
                    }
                  />
                  <SlotCell
                    color="bg-[#D8E4BC]"
                    slotNum={51}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 51)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC]"
                    slotNum={52}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]", "$30", 52)
                    }
                  />
                  <SlotCell
                    color="bg-[#64A2AC]"
                    slotNum={53}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC]", "$30", 53)
                    }
                  />
                  <td className="bg-[#BE514B]  premium "></td>
                  <SlotCell
                    color="bg-[#BE514B]  "
                    slotNum={54}
                    onClick={() =>
                      handleColorSelection("bg-[#BE514B]", "$30", 54)
                    }
                    colSpan={2}
                  />
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
                <span className="font-semibold">Basic Stall 2</span>
                <span>3 X 2 Meter (Font 3m/10ft)</span>
                <span className="font-semibold">35,000INR</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#D8E4BC] h-8 w-8 rounded-lg -mt-10"></span>
              <p className="flex flex-col items-start justify-center text-[#707070]">
                <span className="font-semibold">Premium Stall</span>
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

export default BookStallModal;
