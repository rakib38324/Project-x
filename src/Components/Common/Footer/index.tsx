import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black  py-20 text-white">
      <section className="max-w-screen-lg mx-auto md:flex justify-between items-center ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-5 text-3xl justify-around ">
            <FaLinkedin className="cursor-pointer" />
            <FaTwitterSquare className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagramSquare className="cursor-pointer" />
          </div>
          <p className="text-sm mt-5">
            X, a division of Google LLC. All rights reserved.
          </p>
        </div>
        <div className=" flex gap-10 justify-around mt-10 md:mt-0">
          <p className="cursor-pointer">PRIVACY + TERMS</p>
          <p className="cursor-pointer">GOOGLE</p>
          <p className="cursor-pointer">ALPHABET</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
