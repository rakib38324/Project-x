import Layout from "@/Components/Layout";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <Layout pageTitle="X">
      <div className="max-w-screen-xl mx-auto h-80">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="max-w-screen-lg mx-auto  mt-10 mb-40 font-serif">
        <TypeAnimation
          sequence={[
            "We create radical new technologies to solve some of the world’s hardest problems",
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "80px", display: "inline-block" }}
          repeat={0}
          cursor={false}
        />
      </div>

      <div data-aos="fade-up" className="max-w-screen-lg mx-auto my-20 ">
        <div className="grid grid-cols-2">
          <p className="text-5xl my-auto">X - The Moonshot Factory</p>
          <p className="text-2xl text-justify">
            X is a diverse group of inventors and entrepreneurs who build and
            launch technologies that aim to improve the lives of millions, even
            billions, of people. Our goal: 10x impact on the world’s most
            intractable problems, not just 10% improvement. We approach projects
            that have the aspiration and riskiness of research with the speed
            and ambition of a startup.
          </p>
        </div>
      </div>
    </Layout>
  );
}
