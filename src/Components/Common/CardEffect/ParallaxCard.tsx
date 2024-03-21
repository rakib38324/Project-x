import { FaArrowRight } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

type TProps = {
  image: string;
  title: string;
  content: string;
};

const ParallaxCard = ({ image, title, content }: TProps) => {
  return (
    <div className="sticky top-0 card relative flex items-center justify-center h-screen">
      <Parallax className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </Parallax>
      <div className="w-1/2 mx-auto relative z-10 text-white">
        <h1 data-aos="fade-right" className="text-2xl mb-4">
          {title}
        </h1>
        <p
          data-aos="fade-right"
          className="flex gap-10 hover:text-yellow-400 cursor-pointer"
        >
          <FaArrowRight className="p-2 text-xl md:text-3xl text-black bg-yellow-400" />
          {content}
        </p>
      </div>
    </div>
  );
};

export default ParallaxCard;
