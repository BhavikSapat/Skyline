import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
const Hero = () => {
  const keys = [
    { title: "500+", desc: "Properties Sold" },
    { title: "15+", desc: "Years Experience" },
    { title: "98%", desc: "Happy Clients" },
    { title: "123+", desc: "Expert Agents" },
  ];
  return (
    <>
      <div className="flex h-full flex-col justify-center">
        <div className="items-center mx-30 my-15">
          <div className="text-white">
            <p>⭐ Trusted by 1500+ families. </p>
            <h1 className="font-bold text-6xl my-2 mb-10 text-white ">
              Find Your Dream Property
            </h1>
            <p className="text-2xl mb-7 text-white mix-blend-difference">
              Discover premium residential and commercial
              <br />
              properties with trusted experts.
            </p>
            <Link href="#properties">
              <Button
                className="py-5 px-5 mr-3 bg-[#6F532D] text-white"
                variant="secondary"
              >
                Explore Properties
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="py-5 px-5 border border-white bg-white/10 backdrop-blur-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10 w-100vw py-3 bg-[#c2ae9b]/20">
          {keys.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className=" py-8 p-6 rounded-xl  text-center transition-all duration-300 hover:shadow-xl"

                // className="bg-white/20 backdrop-blur-xl py-8 p-6 rounded-xl shadow-xl border  text-center transition-all duration-300 hover:shadow-md"
              >
                <h2 className="text-4xl font-extrabold text-white mb-1">
                  {item.title}
                </h2>
                <p className="text-white font-medium tracking-wider text-xs uppercase">
                  {item.desc}
                </p>
              </div>
              {index < keys.length - 1 && (
                <Separator
                  orientation="vertical"
                  className=" md:block h-full w-[1px] bg-white/100"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
