import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e0f2fe]">
      <div className="flex flex-col py-10">
        <hr className="bg-gray-300 h-[1.2px] w-[90%] ml-5 md:ml-14" />
        <div className="container flex flex-col md:flex-row items-center justify-between py-5">
          <div className="flex  items-center justify-center  md:justify-between flex-col  gap-4">
            <div className="flex flex-col gap-3 justify-center items-center">
              <Image
                src={"/logo.jpg"}
                alt="logo"
                height={100}
                width={100}
                className=""
              />
              <span>info@womanlisted.com</span>
            </div>
            <div className="flex items-center justify-between md:gap-3 gap-2  px-4 md:px-0">
              <div className="flex flex-col  gap-3 justify-center items-center">
                <Image
                  src={"/logo.jpg"}
                  alt="logo"
                  height={100}
                  width={100}
                  className=""
                />
                <span>info@womanlisted.com</span>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <Image
                  src={"/logo.jpg"}
                  alt="logo"
                  height={100}
                  width={100}
                  className=""
                />
                <span>info@womanlisted.com</span>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 flex items-center justify-between gap-32 text-[1.035rem]">
            <ul className="flex flex-col  gap-1 text-[#707070] list-outside">
              <li className="hover:cursor-pointer hover:text-gray-600  ">
                Home
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600  ">
                About US
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600  ">
                Event
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600  ">
                Press & Media
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600  ">
                Community
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600  ">
                Products
              </li>
            </ul>
            <ul className="flex flex-col gap-1 text-[#707070]">
              <li className="hover:cursor-pointer hover:text-gray-600 ">
                Home
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600 ">
                About US
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600 ">
                Event
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600 ">
                Press & Media
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600 ">
                Community
              </li>
              <li className="hover:cursor-pointer hover:text-gray-600 ">
                Products
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center mt-5 md:mt-0">
            <div className="flex items-center justify-between">
              <Image
                src={"/goole.jpg"}
                alt=""
                className="h-10 w-36 object-contain"
                height={100}
                width={200}
              />
              <Image
                src={"/appstore.jpg"}
                alt=""
                className="h-10 w-36 object-contain"
                height={100}
                width={200}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 items-center justify-center">
              <span className="text-[1rem] font-semibold text-[#707070]">
                Reach Out to us
              </span>
              <div className="flex items-center justify-between gap-5">
                <Image
                  width={48}
                  height={48}
                  alt="Instagram Logo"
                  src="https://img.icons8.com/color/48/instagram-new--v1.png"
                />
                <Image
                  width={48}
                  height={48}
                  alt="FacebookLogo"
                  src="https://img.icons8.com/fluency/48/facebook-new.png"
                />
                <Image
                  width={48}
                  height={48}
                  alt="Linekdin Logo"
                  src="https://img.icons8.com/color/48/linkedin.png"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-300 h-[1.2px] w-[90%] ml-5  md:ml-14" />
        <div className="flex flex-col gap-2 md:flex-row items-center justify-center mt-4 text-[1rem] text-[#707070]">
          <span>Copyright@Womenlisted.com</span>
          <span>All right to reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
