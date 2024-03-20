import CardEffect from "@/Components/Common/CardEffect";
import Layout from "@/Components/Layout";
import { TypeAnimation } from "react-type-animation";
import background from "../Media/earth.jpg";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <Layout pageTitle="X">
      <div className="max-w-screen-xl mx-auto h-96">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="max-w-screen-lg mx-auto mt-5 mb-10  md:mt-10 md:mb-40 font-serif">
        <TypeAnimation
          sequence={[
            "We create radical new technologies to solve some of the world’s hardest problems",
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={0}
          cursor={false}
          className="text-2xl md:text-7xl"
        />
      </div>

      <div data-aos="fade-up" className="max-w-screen-lg mx-auto my-20 p-2">
        <div className="lg:grid lg:grid-cols-2">
          <p className="text-3xl md:text-5xl my-auto">
            X - The Moonshot Factory
          </p>
          <p className="text-xl md:text-2xl text-justify mt-10 lg:mt-0">
            X is a diverse group of inventors and entrepreneurs who build and
            launch technologies that aim to improve the lives of millions, even
            billions, of people. Our goal: 10x impact on the world’s most
            intractable problems, not just 10% improvement. We approach projects
            that have the aspiration and riskiness of research with the speed
            and ambition of a startup.
          </p>
        </div>
      </div>

      <CardEffect />

      <div
        style={{ background: `url(${background.src})` }}
        className="relative min-h-screen !bg-no-repeat !bg-center !bg-cover w-full "
      >
        <p className="sticky top-0 z-30 text-2xl p-3 bg-yellow-400 w-60 pl-10">
          Stories + News
        </p>

        <div className="max-w-screen-lg mx-auto px-2 min-h-screen pt-[100%] lg:pt-[40%] ">
          <p className="text-white">We choose to go to the moon</p>

          <div className="  flex justify-between items-end align-bottom">
            <p className="text-yellow-400">MOONSHOT THINKING</p>
            <p className="flex gap-10 hover:text-yellow-400 cursor-pointer">
              <FaArrowRight className="p-2 text-3xl text-black bg-yellow-400" />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
