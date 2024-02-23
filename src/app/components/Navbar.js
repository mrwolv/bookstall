"use client"

import Image from "next/image";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DrawerComponent from "@/components/drawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FDFDFD] shadow-md md:px-20 px-3">
      <div className="flex items-center justify-between  ">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center md:gap-[25rem] ">
          <Image src="/logo.jpg" alt="log" width={90} height={90} />
          <div>
            <input
              type="text"
              className="mt-3 mb-2 md:mb-0 md:mt-0 outline rounded-md 
               border-[#e5e5e5] border pr-2 md:pr-5 pl-16 py-3 outline-none w-full
              "
              placeholder="Search here "
            />
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between gap-2 -ml-[5rem] mb-[5rem]">
          <p className="flex flex-col gap-1">
            <CiUser size={25} />
            <span className="text-xs">Login</span>
          </p>
          <p className="flex flex-col gap-1">
            <CiUser size={25} />
            <span className="text-xs">Register</span>
          </p>
          <DrawerComponent open={open} setOpen={setOpen}/>
        </div>
        <div className="hidden md:flex md:items-center md:justify-between  md:gap-7">
          <p className="flex flex-col items-center justify-center hover:cursor-pointer">
            <BiCategory size={27} />
            <span>Categories</span>
          </p>
          <p className="flex flex-col items-center justify-center hover:cursor-pointer">
            <BsBriefcase size={27} />
            <span>Bussiness</span>
          </p>
          <p className="flex flex-col items-center justify-center hover:cursor-pointer ">
            <CiUser size={27} />
            <span>Login</span>
          </p>
          <p className="flex flex-col items-center justify-center hover:cursor-pointer">
            <FaUserGraduate size={27} />
            <span>Register</span>
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu size={27} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
