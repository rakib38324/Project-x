import React, { useState } from "react";
import pic5 from "../../../Media/5.jpg";
import pic6 from "../../../Media/6.jpg";
import pic7 from "../../../Media/7.jpg";
import pic8 from "../../../Media/8.jpg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          width={600}
          height={600}
          alt="logo"
          src={pic5}
          className="w-full h-96"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          width={600}
          height={600}
          alt="logo"
          src={pic6}
          className="w-full h-96"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          width={600}
          height={600}
          alt="logo"
          src={pic7}
          className="w-full h-96"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          width={600}
          height={600}
          alt="logo"
          src={pic8}
          className="w-full h-96"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
