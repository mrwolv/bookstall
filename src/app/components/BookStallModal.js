import { useState } from "react";
import Image from "next/image";
import BookStallBuy from "./BookStallBuy";

const SlotCell = ({ slotNum, color, onClick, colSpan, border, rowSpan }) => {
  return (
    <td
      colSpan={colSpan}
      className={` ${color}  ${
        color === "bg-red-600" ? "cursor-not-allowed" : "cursor-pointer"
      } ${border ? "" : "border-b border-black"} px-4 py-2 `}
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

  const handleColorSelection = (color, price, slotNum) => {
    setSelectedColor(color);
    setSelectedPrice(price);
    setSelectedStallNumber(slotNum);
  };

  return (
    <div className=" text-black shadow-xl ">
      {open && (
        <div
          className="fixed top-[10%] -translate-x-1/2 overflow-y-auto
        h-[90%] rounded-md bg-white shadow-xl px-5 border outline-dotted "
        >
          <h1 className="font-semibold text-[1.4rem]  flex items-center justify-center">
            Stall Layout
          </h1>
          <div className=" flex items-center justify-between mt-3 ">
            <span className=" text-[1.1rem]">Book Stall Bazar 2024</span>
            <button
              className="text-[1rem] hover:underline"
              onClick={() => setOpen(!open)}
            >
              Back
            </button>
          </div>
          <div className="py-4 mr-52 ">
            <div className="lg:w-9/12 lg:m-auto sm:w-full mb-2 px-0 text-center tbls">
              <table className="text-sm table-auto" border="1" width={100}>
                {/* First table */}
                <tr>
                  <SlotCell
                    color="bg-[#BE514B]"
                    slotNum={94}
                    colSpan="2"
                    onClick={() => handleColorSelection("#BE514B", "$10", 94)}
                  />

                  <SlotCell
                    color="bg-[#64A2AC]"
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
                  <td className="bg-red-600 border-b basic" colSpan={2}>
                    <a href="#">Media01</a>
                  </td>
                  <td className="bg-red-600 border-b premium basic2">
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
                  <SlotCell
                    color="bg-[#FFFF00]"
                    colSpan={2}
                    border="false"
                    slotNum="Phase3"
                  />
                  <SlotCell color="bg-[#FFFF00]" border="false" />

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
                    color="bg-red-600 "
                    slotNum={90}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell
                    color="bg-red-600 "
                    slotNum={89}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell
                    color="bg-red-600 "
                    slotNum={88}
                    // onClick={() => handleColorSelection("bg-[#00FF01]", "$30")}
                  />
                  <SlotCell color="bg-red-600 " slotNum={87} />
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
                    color="bg-red-600 "
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
                  <SlotCell color="bg-red-600 " slotNum={"12A"} rowSpan="2" />
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
                  <SlotCell color="bg-red-600 " slotNum={45} />
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
                  <SlotCell color="bg-red-600 " slotNum={81} />
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
                  {/* <td className="premium bg-red-600 text-white " rowSpan={2}>
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
                  <SlotCell color="bg-red-600 " slotNum={12} />
                  <SlotCell
                    color="bg-[#64A2AC] "
                    slotNum={35}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 35)
                    }
                  />
                  <SlotCell color="bg-red-600 " slotNum={36} />
                  <SlotCell
                    color="bg-[#D8E4BC] "
                    slotNum={37}
                    onClick={() =>
                      handleColorSelection("bg-[#D8E4BC]", "$30", 37)
                    }
                  />
                  <SlotCell color="bg-red-600 " slotNum={38} />
                  <SlotCell color="bg-red-600 " slotNum={39} />
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
                  <SlotCell color="bg-red-600 " slotNum={79} />
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
                    color="bg-[#D8E4BC]   "
                    slotNum={58}
                    onClick={() =>
                      handleColorSelection("bg-[#64A2AC] ", "$30", 58)
                    }
                  />
                </tr>
                {/* 8 row */}

                <tr>
                  <td className="premium bdr text-white bg-red-600 border-b border-black">
                    <a href="#">11</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">34</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">33</a>
                  </td>
                  <td className=" bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">32</a>
                  </td>
                  <td className=" bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">31</a>
                  </td>
                  <td className="bg-[#00FF01] premium border-b border-black">
                    <a href="#">30</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">29</a>
                  </td>
                  <td className="bg-red-600 text-white  premium  border-b border-black">
                    <a href="#">28</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-red-600 premium text-white border-b border-black ">
                    <a href="#">70</a>
                  </td>{" "}
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">71</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">72</a>
                  </td>
                  <td className="bg-[#D8E4BC]   premium border-b border-black">
                    <a href="#">73</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">74</a>
                  </td>
                  <td className="bg-[#79AE58]  premium "></td>
                  <td className="bg-[#D8E4BC]    premium border-b border-black">
                    <a href="#">57</a>
                  </td>
                </tr>

                {/* 9 r0w */}
                <tr>
                  <td className="premium bg-red-600 text-white  " rowSpan={2}>
                    10
                  </td>
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
                  <td className="bg-red-600 premium text-white  border-b border-black"></td>{" "}
                  <td className="bg-[#79AE58]  premium border-b border-black font-semibold">
                    Phase2
                  </td>
                  <td className="bg-[#79AE58]  premium border-b border-black"></td>
                  <td className="bg-[#79AE58]    premium border-b border-black"></td>
                  <td className="bg-[#79AE58]  premium border-b border-black"></td>
                  <td className="bg-[#79AE58]  premium"></td>
                  <td className=" bg-[#64A2AC]  premium" rowSpan={2}>
                    <a href="#">59</a>
                  </td>
                </tr>

                {/* 10 row */}
                <tr>
                  <td className=" bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">21</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">22</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">23</a>
                  </td>
                  <td className="bg-[#00FF01]  premium border-b border-black">
                    <a href="#">24</a>
                  </td>
                  <td className="bg-red-600 premium border-b border-black">
                    <a href="#">25</a>
                  </td>
                  <td className="bg-[#64A2AC] text-white  premium border-b border-black ">
                    <a href="#">26</a>
                  </td>
                  <td className="bg-[#BE514B] text-white  premium border-b border-black ">
                    <a href="#">27</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-[#00FF01] premium text-white  border-b border-black">
                    <a href="#">69</a>
                  </td>{" "}
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">68</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">67</a>
                  </td>
                  <td className="bg-[#D8E4BC]   premium border-b border-black">
                    <a href="#">66</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">65</a>
                  </td>
                  <td className="bg-[#79AE58]  premium"></td>
                </tr>
                {/* 10 row */}
                <tr>
                  <td className="premium bdr bg-red-600 border-b text-whie border-black">
                    <a href="#">9</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">20</a>
                  </td>
                  <td className=" bg-[#00FF01] premium border-b border-black">
                    <a href="#">19</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">18</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">17</a>
                  </td>
                  <td className="bg-[#00FF01] premium border-b border-black">
                    <a href="#">16</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">15</a>
                  </td>
                  <td className="bg-[#BE514B] text-white  premium  border-b border-black">
                    <a href="#">14</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-red-600 premium text-white border-b border-black ">
                    <a href="#">60</a>
                  </td>{" "}
                  <td className="bg-red-600 premium border-b border-black">
                    <a href="#">61</a>
                  </td>
                  <td className="bg-red-600 premium border-b border-black">
                    <a href="#">62</a>
                  </td>
                  <td className="bg-[#D8E4BC]   premium border-b border-black">
                    <a href="#">63</a>
                  </td>
                  <td className="bg-[#00FF01]   premium border-b border-black">
                    <a href="#">64</a>
                  </td>
                  <td className="bg-[#79AE58]  premium "></td>
                  <td className="bg-[#D8E4BC]    premium border-b border-black">
                    <a href="#">55</a>
                  </td>
                </tr>

                {/* 11 row */}
                <tr>
                  <td className="premium bdr bg-[#BE514B] "></td>
                  <td className=" premium "></td>
                  <td className=" premium font-semibold">Phase1</td>
                  <td className=" premium "></td>
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
                  <td className="premium bdr bg-[#BE514B]" colSpan={2}>
                    <a href="#" className="text-white">
                      8
                    </a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">7</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">6</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">5</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">4</a>
                  </td>
                  <td className="bg-red-600  premium border-b border-black">
                    <a href="#">3</a>
                  </td>
                  <td className="bg-red-600  premium border-b border-black">
                    <a href="#">2</a>
                  </td>
                  <td className="bg-[#BE514B]  text-white  premium  border-b border-black">
                    <a href="#">1</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-red-600 premium text-white border-b border-black ">
                    <a href="#">49</a>
                  </td>{" "}
                  <td className="bg-[#00FF01] premium border-b border-black">
                    <a href="#">50</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">51</a>
                  </td>
                  <td className="bg-[#00FF01]   premium border-b border-black">
                    <a href="#">52</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">53</a>
                  </td>
                  <td className="bg-[#BE514B]  premium "></td>
                  <td className="bg-[#BE514B] text-white premium" colSpan={2}>
                    <a href="#">54</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="mt-5 px-36 flex items-center justify-between ">
            <Image src={"/prices.webp"} alt="pRICES" height={200} width={400} />
            <Image
              src={"/prOcess.webp"}
              alt="pRICES"
              height={100}
              width={150}
            />
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
