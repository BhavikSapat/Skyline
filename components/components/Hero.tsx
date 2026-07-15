import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Hero = () => {
  const keys = [
    {
      title: "500+",
      desc: "Properties Sold",
    },
    {
      title: "15+",
      desc: "Years Experience",
    },
    {
      title: "98%",
      desc: "Happy Clients",
    },
    {
      title: "123+",
      desc: "Expert Agents",
    },
  ];

  return (
    <section id="hero" className="flex min-h-screen flex-col justify-between">
      <div className="flex-1 flex items-center">
        <div className="w-full px-5 sm:px-8 md:px-14 lg:px-24 xl:px-30">
          <div className="max-w-3xl text-white">
            <p className="text-sm sm:text-base">
              ⭐ Trusted by 1500+ families.
            </p>

            <h1 className="mt-4 mb-6 font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl">
              Find Your Dream Property
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed text-white">
              Discover premium residential and commercial
              <br className="hidden sm:block" />
              properties with trusted experts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#properties">
                <Button className="w-full sm:w-auto bg-[#6F532D] px-6 py-6 transition hover:scale-105 hover:bg-[#6F532D]/90">
                  Explore Properties
                </Button>
              </Link>

              <Link href="#contact">
                <Button className="w-full sm:w-auto border border-white bg-white/10 backdrop-blur-xl px-6 py-6 transition hover:scale-105 hover:bg-white/5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#c2ae9b]/20 backdrop-blur-md">
        <div className="hidden md:flex justify-center items-center">
          {keys.map((item, index) => (
            <React.Fragment key={index}>
              <div className="px-12 py-8 text-center">
                <h2 className="text-4xl font-extrabold text-white">
                  {item.title}
                </h2>

                <p className="mt-1 text-xs uppercase tracking-wider text-white">
                  {item.desc}
                </p>
              </div>

              {index !== keys.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-auto my-3 bg-white"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-2 md:hidden">
          {keys.map((item) => (
            <div
              key={item.title}
              className="border border-white/20 py-6 text-center"
            >
              <h2 className="text-3xl font-bold text-white">{item.title}</h2>

              <p className="mt-1 text-[11px] uppercase tracking-wider text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
