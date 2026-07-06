import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Hero from "./components/Hero";
const Page = () => {
  return (
    <>
      <Image
        className="absolute object-cover inset-0 z-0"
        src="/banner1.webp"
        alt="Hero"
        fill
        priority
      />{" "}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
      <div className="relative w-full h-full overflow-hidden z-10">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Page;
