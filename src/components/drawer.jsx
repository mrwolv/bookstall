import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DrawerComponent = ({ open, setOpen }) => {
  console.log(open);
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div classNameName="bg-[#64A2AD] px-2 py-2.5 mb-2.5">
            <GiHamburgerMenu
              classNameName="text-white "
              size={27}
              onClick={() => setOpen(!open)}
            />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col justify-between gap-4">
            <p className="flex flex-col items-center justify-center hover:cursor-pointer">
              <BiCategory size={27} />
              <span>Categories</span>
            </p>
            <p className="flex flex-col items-center justify-center hover:cursor-pointer">
              <BsBriefcase size={27} />
              <span>Bussiness</span>
            </p>
            <p className="flex flex-col items-center justify-center hover:cursor-pointer">
              <BiCategory size={27} />
              <span>Login</span>
            </p>
            <p className="flex flex-col items-center justify-center hover:cursor-pointer">
              <FaUserGraduate size={27} />
              <span>Register</span>
            </p>
          </div>
        </DrawerContent>
      </Drawer>
      {/* )} */}
    </>
  );
};

export default DrawerComponent;
