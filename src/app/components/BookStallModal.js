const BookStallModal = ({ open, setOpen }) => {
  return (
    <div className=" text-black shadow-xl ">
      {open && (
        <div
          className="fixed  top-[10%] -translate-x-1/2 
          h-full w-[90%] rounded-md bg-white shadow-xl px-5 border outline-dotted "
        >
          <h1 className="font-semibold text-[1.4rem] flex items-center justify-center">
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
                  <td className="premium bdr bg-[#BE514B]" colSpan={2}>
                    <a href="#" className="text-white">
                      94
                    </a>
                  </td>
                  <td className="premium border-b border-black bg-[#64A2AC]">
                    <a href="#">95</a>
                  </td>
                  <td className="bg-red-600 border-b border-black premium">
                    <a href="#">96</a>
                  </td>
                  <td className="bg-[#D8E4BC] border-b border-black premium">
                    <a href="#">97</a>
                  </td>
                  <td className="bg-red-600  border-b border-black premium">
                    <a href="#">98</a>
                  </td>
                  <td className="bg-[#64A2AC] border-b border-black premium">
                    <a href="#">99</a>
                  </td>
                  <td
                    className="bg-red-600 border-b border-black basic"
                    colSpan={2}
                  >
                    <a href="#">Media01</a>
                  </td>
                  <td className="bg-red-600 border-b premium border-black basic2">
                    <a href="#">Media02</a>
                  </td>
                  <td className="bg-[#64A2AC] border-b border-black premium">
                    <a href="#">100</a>
                  </td>
                  <td className="bg-[#D8E4BC] border-b border-black premium">
                    <a href="#">101</a>
                  </td>{" "}
                  <td className="bg-[#D8E4BC] border-b border-black premium">
                    <a href="#">102</a>
                  </td>{" "}
                  <td className="bg-[#D8E4BC] border-b border-black premium">
                    <a href="#">103</a>
                  </td>
                  <td className="bg-[#64A2AC] border-b border-black premium">
                    <a href="#">104</a>
                  </td>
                  <td className="bg-[#BE514B] text-white premium" colSpan={2}>
                    <a href="#">105</a>
                  </td>
                </tr>
                {/* Second row */}
                <tr>
                  <td
                    className="premium bdr bg-[#BE514B] border-b border-black"
                    // colSpan={2}
                  ></td>
                  <td className="premium bg-[#FFFF00]"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] font-semibold" colSpan={2}>
                    <a href="#">Phase-3</a>
                  </td>
                  <td className="bg-[#FFFF00] "></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>{" "}
                  <td className="bg-[#FFFF00] premium"></td>{" "}
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] text-white premium"></td>
                  <td className="bg-[#FFFF00] text-white premium"></td>
                  <td className="bg-[#BE514B] text-white premium"></td>
                </tr>
                {/* third row */}
                <tr>
                  <td className="premium bdr bg-[#64A2AC] border-b border-black">
                    <a href="#">93</a>
                  </td>
                  <td className="premium bg-[#FFFF00]"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00]" colSpan={2}>
                    <a href="#">Food Area</a>
                  </td>
                  <td className="bg-[#FFFF00] premium "></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>{" "}
                  <td className="bg-[#FFFF00] premium"></td>{" "}
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] premium"></td>
                  <td className="bg-[#FFFF00] text-white premium"></td>
                  <td className="bg-[#64A2AC]   premium">
                    <a href="#">106</a>
                  </td>
                </tr>
                {/* Fourth row */}

                <tr>
                  <td className="premium bdr bg-red-600 border-b border-black text-white">
                    <a href="#">92</a>
                  </td>
                  <td className="premium bg-[#FFFF00]"></td>
                  <td className="bg-[#00FF01] premium border-b border-black">
                    <a href="#">91</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">90</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">89</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">88</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">87</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">86</a>
                  </td>
                  <td className="bg-[#BE514B] text-white  premium  border-b border-black">
                    <a href="#">85</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-red-600 premium text-white border-b border-black ">
                    <a href="#">112</a>
                  </td>{" "}
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">111</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">110</a>
                  </td>
                  <td className="bg-[#D8E4BC]   premium border-b border-black">
                    <a href="#">109</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">108</a>
                  </td>
                  <td className="bg-[#FFFF00]  premium "></td>
                  <td className="bg-[#D8E4BC]    premium border-b border-black">
                    <a href="#">107</a>
                  </td>
                </tr>

                {/* Fifth row */}

                <tr>
                  <td className="premium bg-red-600 text-white  " rowSpan={2}>
                    12A
                  </td>
                  <td rowSpan={8}></td>
                  <td className=" bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">48</a>
                  </td>
                  <td className=" bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">47</a>
                  </td>
                  <td className=" bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">46</a>
                  </td>
                  <td className="bg-red-600 premium border-b border-black text-white">
                    <a href="#">45</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">44</a>
                  </td>
                  <td className="bg-[#BE514B] text-white  premium border-b border-black ">
                    <a href="#">43</a>
                  </td>
                  <td className="bg-[#BE514B] text-white  premium border-b border-black ">
                    <a href="#">42</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-red-600 premium text-white  border-b border-black">
                    <a href="#">80</a>
                  </td>{" "}
                  <td className="bg-red-600 premium border-b border-black">
                    <a href="#">81</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">82</a>
                  </td>
                  <td className="bg-[#D8E4BC]   premium border-b border-black">
                    <a href="#">83</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">84</a>
                  </td>
                  <td className="bg-[#79AE58]  premium"></td>
                  <td className=" bg-[#64A2AC]  premium" rowSpan={2}>
                    <a href="#">59</a>
                  </td>
                </tr>
                <tr>
                  {/* <td className="premium bg-red-600 text-white " rowSpan={2}>
                    12A
                  </td> */}
                  {/* <td rowSpan={8}></td> */}
                  <td className="  premium"></td>
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
                  <td className="premium bdr bg-red-600 border-b border-black">
                    <a href="#">12</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">35</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">36</a>
                  </td>
                  <td className=" bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">37</a>
                  </td>
                  <td className=" bg-red-600 premium border-b border-black">
                    <a href="#">38</a>
                  </td>
                  <td className="bg-red-600 premium border-b border-black">
                    <a href="#">39</a>
                  </td>
                  <td className="bg-[#64A2AC] premium border-b border-black">
                    <a href="#">40</a>
                  </td>
                  <td className="bg-[#00FF01] text-white  premium  border-b border-black">
                    <a href="#">41</a>
                  </td>
                  <td className=""></td>{" "}
                  <td className="bg-red-600 premium text-white border-b border-black ">
                    <a href="#">79</a>
                  </td>{" "}
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">78</a>
                  </td>
                  <td className="bg-[#D8E4BC] premium border-b border-black">
                    <a href="#">77</a>
                  </td>
                  <td className="bg-[#D8E4BC]   premium border-b border-black">
                    <a href="#">76</a>
                  </td>
                  <td className="bg-[#64A2AC]  premium border-b border-black">
                    <a href="#">75</a>
                  </td>
                  <td className="bg-[#79AE58]  premium "></td>
                  <td className="bg-[#D8E4BC]    premium border-b border-black">
                    <a href="#">58</a>
                  </td>
                </tr>
                {/* 8 row */}

                <tr>
                  <td className="premium bdr bg-red-600 border-b border-black">
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
                  <td className=" bg-[#64A2AC] premium border-b border-black">
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
                  <td className="premium bdr bg-red-600 border-b border-black">
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
        </div>
      )}
    </div>
  );
};

export default BookStallModal;
