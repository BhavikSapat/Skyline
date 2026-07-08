"use client";

import Autoplay from "embla-carousel-autoplay";
import { Star, BadgeCheck, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useRef } from "react";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    }),
  );

  const keys = [
    {
      name: "Talha Khan",
      initials: "TH",
      role: "Verified Buyer",
      purchased: "Luxury Villa",
      review:
        "Skyline Realty made our home-buying journey incredibly smooth. Their team understood exactly what we wanted and handled every detail professionally.",
    },
    {
      name: "Sachin Gupta",
      initials: "SG",
      role: "Verified Client",
      purchased: "Modern Apartment",
      review:
        "Transparent pricing, genuine properties, and excellent guidance throughout the process. I highly recommend Skyline Realty.",
    },
    {
      name: "Daskh Sevkani",
      initials: "DS",
      role: "Verified Buyer",
      purchased: "Sea View Penthouse",
      review:
        "From paperwork to possession, everything was stress-free. Their consultants were always available whenever we needed assistance.",
    },
    {
      name: "Ananya Patel",
      initials: "AP",
      role: "Verified Buyer",
      purchased: "Premium Duplex",
      review:
        "The consultants were patient, knowledgeable, and helped us find the perfect home within our budget. Every step was transparent.",
    },
    {
      name: "Rohan Mehra",
      initials: "RM",
      role: "Verified Investor",
      purchased: "Luxury Residence",
      review:
        "Excellent market insights and honest advice. Skyline Realty helped me secure an investment property with great appreciation potential.",
    },
    {
      name: "Neha Kapoor",
      initials: "NK",
      role: "Verified Client",
      purchased: "Garden Villa",
      review:
        "I appreciated their attention to detail and prompt communication. The entire buying experience felt seamless and professional.",
    },
    {
      name: "Arjun Nair",
      initials: "AN",
      role: "Verified Buyer",
      purchased: "Urban Studio",
      review:
        "As a first-time homebuyer, I had countless questions. The Skyline Realty team guided me with patience and clarity throughout the journey.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-gradient-to-t from-black/10 via-white/90 to-white px-5 sm:px-8 md:px-12 lg:px-20 py-14 lg:py-20"
    >
      {/*

      <Image
        src="/testimonial-bg.webp"
        alt="Testimonials"
        fill
        className="object-cover -z-10"
      />

      */}

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between rounded-2xl border border-[#8B6B3E] p-6 sm:p-8 lg:px-16 lg:py-12">
        <div className="w-full lg:max-w-[35%] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8B6B3E] leading-tight">
            What Our Clients Say
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-8">
            Trusted by hundreds of families who found their perfect home with
            Skyline Realty.
          </p>

          <Link href="#testimonials">
            <div className="mt-8 inline-flex items-center gap-2 text-[#8B6B3E] hover:underline">
              <span>View All Reviews</span>
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </Link>
        </div>

        <div className="relative w-full lg:w-[430px]">
          <Carousel plugins={[plugin.current]} className="w-full ">
            <CarouselContent>
              {keys.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="group rounded-xl shadow-md border border-[#8B6B3E]">
                    <CardContent className="flex flex-col p-6 sm:p-8">
                      <div className="mb-6 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-500 text-yellow-500 transition group-hover:scale-110"
                          />
                        ))}
                      </div>

                      <p className="leading-7 italic text-gray-600 min-h-[160px] flex items-center">
                        "{item.review}"
                      </p>

                      <div className="my-6 border-t" />

                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3ECE3] font-bold text-[#8B6B3E]">
                          {item.initials}
                        </div>

                        <div>
                          <h3 className="font-semibold">{item.name}</h3>

                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                            <BadgeCheck className="h-4 w-4" />

                            {item.role}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Purchased
                        </p>

                        <p className="font-semibold text-[#8B6B3E]">
                          {item.purchased}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 h-9 w-9" />

            <CarouselNext className="right-2 h-9 w-9" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// "use client";
// import { Separator } from "@/components/ui/separator";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Star,
//   BadgeCheck,
//   ArrowRight,
//   ArrowUpRight,
//   ChevronRight,
//   MoveRight,
//   ArrowBigRight,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Link from "next/link";
// import { useRef } from "react";
// const Testimonials = () => {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
//   const keys = [
//     {
//       name: "Talha Khan",
//       initials: "TH",
//       role: "Verified Buyer",
//       purchased: "Luxury Villa",
//       review:
//         "Skyline Realty made our home-buying journey incredibly smooth. Their team understood exactly what we wanted and handled every detail professionally.",
//     },
//     {
//       name: "Sachin Gupta",
//       initials: "SG",
//       role: "Verified Client",
//       purchased: "Modern Apartment",
//       review:
//         "Transparent pricing, genuine properties, and excellent guidance throughout the process. I highly recommend Skyline Realty.",
//     },
//     {
//       name: "Daskh Sevkani",
//       initials: "DS",
//       role: "Verified Buyer",
//       purchased: "Sea View Penthouse",
//       review:
//         "From paperwork to possession, everything was stress-free. Their consultants were always available whenever we needed assistance.",
//     },
//     {
//       name: "Ananya Patel",
//       initials: "AP",
//       role: "Verified Buyer",
//       purchased: "Premium Duplex",
//       review:
//         "The consultants were patient, knowledgeable, and helped us find the perfect home within our budget. Every step was transparent.",
//     },
//     {
//       name: "Rohan Mehra",
//       initials: "RM",
//       role: "Verified Investor",
//       purchased: "Luxury Residence",
//       review:
//         "Excellent market insights and honest advice. Skyline Realty helped me secure an investment property with great appreciation potential.",
//     },
//     {
//       name: "Neha Kapoor",
//       initials: "NK",
//       role: "Verified Client",
//       purchased: "Garden Villa",
//       review:
//         "I appreciated their attention to detail and prompt communication. The entire buying experience felt seamless and professional.",
//     },
//     {
//       name: "Arjun Nair",
//       initials: "AN",
//       role: "Verified Buyer",
//       purchased: "Urban Studio",
//       review:
//         "As a first-time homebuyer, I had countless questions. The Skyline Realty team guided me with patience and clarity throughout the journey.",
//     },
//   ];
//   return (
//     <section
//       className="bg-gradient-to-t from-black/10 via-white/90 to-white/100 w-full px-20  py-10"
//       id="testimonials"
//     >
//       {/* <div className="flex flex-col justify-center text-center py-15">
//         <div className="my-10 flex items-center justify-center gap-6">
//           <Separator className="flex-1 bg-[#8B6B3E]" />
//           <h1 className="whitespace-nowrap text-4xl font-bold text-[#8B6B3E]">
//             How it works
//           </h1>
//           <Separator className="flex-1 bg-[#8B6B3E]" />
//         </div>
//         <p className="text-xl">
//           Simple, transparent, and guided at every step.
//         </p>
//       </div> */}
//       <div className="flex border border-[#8B6B3E] p-3 rounded-xl items-start justify-between px-40">
//         <div className="max-w-[30vw]">
//           <h1 className="whitespace-nowrap text-4xl font-bold text-[#8B6B3E] py-15">
//             What Our Clients Say
//           </h1>
//           <p className="text-xl">
//             Trusted by hundreds of families who found their perfect home with
//             Skyline Realty.
//           </p>
//           <Link href="#testimonials">
//             <div className="flex py-7 text-black/70 gap-3 items-center hover:underline">
//               <p>View All Reviews from our Clients</p>
//               <ArrowUpRight className="h-5 w-5" />
//             </div>
//           </Link>
//         </div>
//         <div className="flex items-center justify-center">
//           <Carousel
//             plugins={[plugin.current]}
//             className="w-full max-w-[10rem] sm:max-w-xs"
//             //   onMouseEnter={plugin.current.stop}
//             //   onMouseLeave={plugin.current.reset}
//           >
//             <CarouselContent>
//               {keys.map((item, index) => (
//                 <CarouselItem key={index}>
//                   <div className="p-1 ">
//                     <Card className="group h-auto rounded-3xl border bg-white shadow-sm transition-all duration-300  ">
//                       <CardContent className="flex h-full flex-col px-8 py-4">
//                         <div className="mb-6 flex gap-1">
//                           {Array.from({ length: 5 }).map((_, i) => (
//                             <Star
//                               key={i}
//                               className="h-5 w-5 fill-yellow-500 text-yellow-500 transition-all duration-300 group-hover:scale-110"
//                             />
//                           ))}
//                         </div>

//                         {/* Review */}
//                         <p className="flex-1 text-gray-600 leading-7 italic">
//                           "{item.review}"
//                         </p>

//                         <div className="my-6 border-t" />

//                         <div className="flex items-center gap-4">
//                           <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3ECE3] font-bold text-[#8B6B3E] transition-transform duration-300 group-hover:scale-110">
//                             {item.initials}
//                           </div>

//                           <div>
//                             <h3 className="font-semibold">{item.name}</h3>

//                             <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
//                               <BadgeCheck className="h-4 w-4" />
//                               {item.role}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="mt-3">
//                           <p className="text-xs uppercase tracking-wider text-gray-400">
//                             Purchased
//                           </p>
//                           <p className="font-semibold text-[#8B6B3E]">
//                             {item.purchased}
//                           </p>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
