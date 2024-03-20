import { useRef, useState, useEffect } from "react";
import dark from "../../../Media/dark.jpg";
import red from "../../../Media/red.jpg";
import white from "../../../Media/pexels-photo-3577348.jpeg";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import ParallaxCard from "./ParallaxCard";

const CardEffect = () => {
  return (
    <section className="relative">
      <p className="sticky top-0 z-30 text-2xl p-3 bg-yellow-400 w-60 pl-10">
        Public x Project
      </p>
      {/* First Card */}
      <ParallaxCard
        image={dark.src}
        title="What if beams of light could provide
        global access to fast, affordable connectivity?"
        content="Explore Taara"
      />

      {/* Second Card */}
      <ParallaxCard
        image={red.src}
        title="What if we could make the world’s electric grid visible
        so everyone could access clean, reliable energy"
        content="Explore Tapestry"
      />

      {/* Third Card */}
      <ParallaxCard
        image={white.src}
        title="What if we could protect the ocean
        while feeding the world sustainably?"
        content="Explore Tapestry"
      />
    </section>
  );
};

export default CardEffect;
