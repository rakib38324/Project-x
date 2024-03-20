// components/HoverCard.tsx
import React, { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

import pic1 from "../../Media/1.jpg";
import pic2 from "../../Media/2.jpg";
import pic3 from "../../Media/3.jpg";
import pic4 from "../../Media/4.jpg";
import Image from "next/image";

const HoverCard = () => {
  return (
    <section className="max-w-screen-lg mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      <div className="w-full h-full group mt-4 md:mt-0">
        <div className="relative overflow-hidden">
          <div className=" bg-black top-10 left-1/2 group-hover:-top-60 opacity-100 group-hover:opacity-0 transition-all duration-700">
            <Image
              className="md:h-60 w-full object-cover "
              src={pic2}
              alt="logo"
            />
          </div>
          <div className="absolute h-full w-full bg-white flex flex-col  justify-between -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <div>
              <p className="text-lg text-black font-semibold">
                Introduction Trida
              </p>
              <p className="text-black text-sm">
                A moonshot to protect the ocean and feed humanity sustainably
              </p>
            </div>

            <div className=" flex justify-between items-end align-bottom">
              <p className="text-sm text-yellow-400 uppercase">X Project</p>
              <p className="flex gap-10  cursor-pointer">
                <FaArrowRight className=" text-xl my-auto text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:row-span-2 h-full group mt-4 md:mt-0">
        <div className="relative overflow-hidden h-full">
          <div className="h-full bg-black top-10 left-1/2 group-hover:-top-60 opacity-100 group-hover:opacity-0 transition-all duration-700">
            <Image className="w-full h-full" src={pic3} alt="logologo" />
          </div>
          <div className="absolute h-full w-full bg-white flex flex-col  justify-between -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <div>
              <p className="text-lg text-black font-semibold">
                Inside X, Google top-secret moonshot factory
              </p>
              <p className="text-black text-sm my-2">
                GANDALF ARRIVES ON rollerblades. It’s morning in the cafeteria
                at X – formerly Google X – and Astro Teller, X’s Captain of
                Moonshots, glides over dressed in coarse grey robes and a
                pointed hat, carrying oatmeal. Jedi stroll past to their desks,
                gripping coffee. Star Fleet officers queue for breakfast. This,
                it should be said, is unusual – it’s Halloween.
              </p>
            </div>

            <div className=" flex justify-between items-end align-bottom">
              <p className="text-sm text-yellow-400 uppercase">X Project</p>
              <p className="flex gap-10  cursor-pointer">
                <FaArrowRight className=" text-xl my-auto text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full group  ">
        <div className="relative overflow-hidden">
          <div className=" bg-black top-10 left-1/2 group-hover:-top-60 opacity-100 group-hover:opacity-0 transition-all duration-700">
            <Image
              className="md:h-60 w-full object-cover "
              src={pic4}
              alt="logo"
            />
          </div>
          <div className="absolute h-full w-full bg-white flex flex-col  justify-between -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <div>
              <p className="text-lg text-black font-semibold">
                Introduction Trida
              </p>
              <p className="text-black text-sm">
                A moonshot to protect the ocean and feed humanity sustainably
              </p>
            </div>

            <div className=" flex justify-between items-end align-bottom">
              <p className="text-sm text-yellow-400 uppercase">X Project</p>
              <p className="flex gap-10  cursor-pointer">
                <FaArrowRight className=" text-xl my-auto text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:row-span-2 h-full group mt-4 md:mt-0">
        <div className="relative overflow-hidden">
          <div className=" bg-black top-10 left-1/2 group-hover:-top-60 opacity-100 group-hover:opacity-0 transition-all duration-700">
            <Image
              className=" h-full w-full object-cover "
              src={pic1}
              alt="logo"
            />
          </div>
          <div className="absolute h-full w-full bg-white flex flex-col  justify-between -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <div>
              <p className="text-lg text-black font-semibold">
                Inside X, Google top-secret moonshot factory
              </p>
              <p className="text-black text-sm my-2">
                GANDALF ARRIVES ON rollerblades. It’s morning in the cafeteria
                at X – formerly Google X – and Astro Teller, X’s Captain of
                Moonshots, glides over dressed in coarse grey robes and a
                pointed hat, carrying oatmeal. Jedi stroll past to their desks,
                gripping coffee. Star Fleet officers queue for breakfast. This,
                it should be said, is unusual – it’s Halloween.
              </p>
            </div>

            <div className=" flex justify-between items-end align-bottom">
              <p className="text-sm text-yellow-400 uppercase">X Project</p>
              <p className="flex gap-10  cursor-pointer">
                <FaArrowRight className=" text-xl my-auto text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:row-span-2  h-full group mt-4 md:mt-0">
        <div className="relative overflow-hidden">
          <div className=" bg-black top-10 left-1/2 group-hover:-top-60 opacity-100 group-hover:opacity-0 transition-all duration-700">
            <Image
              className="h-full w-full object-cover "
              src={pic1}
              alt="logo"
            />
          </div>
          <div className="absolute h-full w-full bg-white flex flex-col  justify-between -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <div>
              <p className="text-lg text-black font-semibold">
                Inside X, Google top-secret moonshot factory
              </p>
              <p className="text-black text-sm my-2">
                GANDALF ARRIVES ON rollerblades. It’s morning in the cafeteria
                at X – formerly Google X – and Astro Teller, X’s Captain of
                Moonshots, glides over dressed in coarse grey robes and a
                pointed hat, carrying oatmeal. Jedi stroll past to their desks,
                gripping coffee. Star Fleet officers queue for breakfast. This,
                it should be said, is unusual – it’s Halloween.
              </p>
            </div>

            <div className=" flex justify-between items-end align-bottom">
              <p className="text-sm text-yellow-400 uppercase">X Project</p>
              <p className="flex gap-10  cursor-pointer">
                <FaArrowRight className=" text-xl my-auto text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  h-full group mt-4 md:mt-0">
        <div className="relative overflow-hidden">
          <div className=" bg-black top-10 left-1/2 group-hover:-top-60 opacity-100 group-hover:opacity-0 transition-all duration-700">
            <Image
              className="md:h-60 w-full object-cover "
              src={pic3}
              alt="logo"
            />
          </div>
          <div className="absolute h-full w-full bg-white flex flex-col  justify-between -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
            <div>
              <p className="text-lg text-black font-semibold">
                Introduction Trida
              </p>
              <p className="text-black text-sm">
                A moonshot to protect the ocean and feed humanity sustainably
              </p>
            </div>

            <div className=" flex justify-between items-end align-bottom">
              <p className="text-sm text-yellow-400 uppercase">X Project</p>
              <p className="flex gap-10  cursor-pointer">
                <FaArrowRight className=" text-xl my-auto text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoverCard;
