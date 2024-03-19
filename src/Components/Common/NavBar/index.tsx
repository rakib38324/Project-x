import React from "react";
import logo from "../../../Media/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

interface NavBarProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ setOpen, open }) => {
  return (
    <div className="flex justify-between items-center mx-10 py-10">
      <Link href={"/"}>
        <Image className="w-full" src={logo} alt="logo" />
      </Link>
      <button
        className="text-2xl cursor-pointer focus:outline-none transition-all duration-300 transform hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        <FaBars
          className={`transition-all duration-1000   ${
            open && "transform rotate-90"
          }`}
        />
        
      </button>
    </div>
  );
};

export default NavBar;
