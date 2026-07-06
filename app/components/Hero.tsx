import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const keys = [
    { title: "500+", desc: "Properties Sold" },
    { title: "15+", desc: "Years Experience" },
    { title: "98%", desc: "Happy Clients" },
    { title: "123+", desc: "Expert Agents" },
  ];
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-65px)] justify-center my-5">
        <div className="items-start mx-30 my-15 ">
          <div>
            <h1 className="font-bold text-6xl my-10 text-white mix-blend-difference">
              Find Your Dream Home
            </h1>
            <p className="text-2xl mb-3 text-white mix-blend-difference">
              Discover premium residential and commercial
              <br />
              properties with trusted experts.
            </p>
            <Button
              className="py-5 px-5 mr-3  bg-white/100 backdrop-blur-xl"
              variant="secondary"
            >
              Explore Properties
            </Button>
            <Button
              className="py-5 px-5 border border-white bg-white/10 backdrop-blur-xl"
              //   variant="secondary"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10 w-100vw py-3">
          {keys.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md py-8 p-6 rounded-xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md"
            >
              <h2 className="text-4xl font-extrabold text-white mb-1">
                {item.title}
              </h2>
              <p className="text-white font-medium tracking-wider text-xs uppercase">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
