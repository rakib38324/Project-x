import React, { useState, useEffect } from "react";
import logo from "../../../Media/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll";

interface NavBarProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ setOpen, open }) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <section
      className={`sticky top-0 bg-gray-50 transition-all duration-1000 transform ${
        scrollDirection === "down" && "opacity-0"
      } z-50`}
    >
      <div
        className={`flex justify-between items-center mx-10 py-10  ${
          scrollDirection === "down" && "opacity-0"
        }`}
      >
        <Link href={"/"}>
          <Image className="w-full cursor-pointer" src={logo} alt="logo" />
        </Link>
        <button
          className="relative text-2xl cursor-pointer focus:outline-none transition-all duration-300 transform hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          <FaTimes
            className={`absolute transition-all duration-1000 transform ${
              open ? "rotate-90 opacity-100" : "opacity-0"
            }`}
          />
          <FaBars
            className={`transition-all duration-1000 transform ${
              open ? "rotate-90 opacity-0" : "opacity-100"
            }`}
          />
        </button>
      </div>
    </section>
  );
};

export default NavBar;
