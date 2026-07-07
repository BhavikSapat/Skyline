import React from "react";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Property from "./components/Property";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";

const Page = () => {
  return (
    <>
      <Navbar />

      <section className="relative h-screen overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover -z-10"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent -z-10" />

        <Hero />
      </section>

      <section className="relative min-h-screen overflow-hidden">
        {/* <Image
          src="/whyUs.webp"
          alt="Why Us Background"
          fill
          className="object-cover -z-10"
        /> */}

        <div className="absolute inset-0 bg-white/80 -z-10" />

        <WhyUs />
      </section>

      <section className="relative min-h-screen overflow-hidden">
        {/* <Image
          src="/banner2.webp"
          alt="Properties Background"
          fill
          className="object-cover -z-10"
        /> */}

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="z-20">
          <Property />
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        {/* <Image
          src="/properties-bg.jpg"
          alt="Properties Background"
          fill
          className="object-cover -z-10"
        /> */}

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <Timeline />
      </section>
      <section className="relative min-h-screen overflow-hidden">
        {/* <Image
          src="/properties-bg.jpg"
          alt="Properties Background"
          fill
          className="object-cover -z-10"
        /> */}

        {/* <div className="absolute inset-0 bg-black/40 -z-10" /> */}

        <Testimonials />
      </section>
    </>
  );
};

export default Page;
