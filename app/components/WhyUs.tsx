import { Building2, Handshake, TrendingUp, ShieldCheck } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

const WhyUs = () => {
  const keys = [
    {
      icon: Building2,
      title: "Verified Properties",
      desc: "Every property is carefully verified for authenticity, ownership, and documentation before it reaches our clients.",
    },
    {
      icon: Handshake,
      title: "Expert Guidance",
      desc: "Our experienced consultants help you make informed decisions based on your budget and long-term goals.",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      desc: "Stay ahead with current market trends, investment opportunities, and accurate property valuations.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Support",
      desc: "From property visits to legal paperwork, we assist you throughout the complete buying or selling journey.",
    },
  ];

  return (
    <section
      id="whyus"
      className="relative w-full overflow-hidden bg-gradient-to-t from-black/10 via-white/90 to-white px-5 py-14 sm:px-8 md:px-12 lg:px-20 lg:py-20"
    >
      {/* <Image
        src="/whyUs.webp"
        alt="Why Us Background"
        fill
        className="object-cover -z-10"
      /> */}

      <div className="flex flex-col items-center text-center">
        <div className="mb-8 flex w-full items-center justify-center gap-3 sm:gap-5">
          <Separator className="flex-1 bg-[#8B6B3E]" />

          <h1 className="whitespace-nowrap text-2xl font-bold text-[#8B6B3E] sm:text-3xl lg:text-4xl">
            Why Choose Skyline Realty
          </h1>

          <Separator className="flex-1 bg-[#8B6B3E]" />
        </div>

        <p className="max-w-3xl text-sm leading-7 text-gray-600 sm:text-base lg:text-xl">
          Your trusted partner for buying, selling and investing in premium
          residential and commercial properties.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {keys.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#8B6B3E] hover:shadow-xl"
            >
              <div className="flex justify-start">
                <span className="rounded-full border bg-[#F8F6F2] px-1.5 py-1 text-sm font-semibold text-[#8B6B3E]">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8B6B3E]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8B6B3E]/20 hover:rotate-15">
                  <Icon className="h-8 w-8 text-[#8B6B3E]" />
                </div>
              </div>

              <h3 className="mt-6 text-center text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
// import { Building2, Handshake, TrendingUp, ShieldCheck } from "lucide-react";
// import React from "react";
// import { Separator } from "@/components/ui/separator";
// const WhyUs = () => {
//   const keys = [
//     {
//       icon: Building2,
//       title: "Verified Properties",
//       desc: "Every property is carefully verified for authenticity, ownership, and documentation before it reaches our clients.",
//     },
//     {
//       icon: Handshake,
//       title: "Expert Guidance",
//       desc: "Our experienced consultants help you make informed decisions based on your budget and long-term goals.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Market Insights",
//       desc: "Stay ahead with current market trends, investment opportunities, and accurate property valuations.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "End-to-End Support",
//       desc: "From property visits to legal paperwork, we assist you throughout the complete buying or selling journey.",
//     },
//   ];
//   return (
//     <section
//       className="bg-[#F8F6F2] w-full px-20 pb-10 bg-gradient-to-t from-black/10 via-white/90 to-white/100"
//       id="whyus"
//     >
//       <div className="flex flex-col justify-center text-center py-15">
//         <div className="my-10 flex items-center justify-center gap-6">
//           <Separator className="flex-1 bg-[#8B6B3E]" />
//           <h1 className="whitespace-nowrap text-4xl font-bold text-[#8B6B3E]">
//             Why choose Skyline Realty
//           </h1>
//           <Separator className="flex-1 bg-[#8B6B3E]" />
//         </div>
//         <p className="text-xl">
//           Your trusted partner for buying, selling and investing in premium
//           residential and commercial properties.
//         </p>
//       </div>
//       <div className="py-5 pb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//         {keys.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               className="rounded-2xl border bg-white p-3 transition-all duration-300 hover:-translate-y-2 hover:border-[#8B6B3E] hover:shadow-xl"
//               key={index}
//             >
//               <p className="rounded-2xl border bg-[#F8F6F2] p-1 w-8.5 text-center">
//                 0{index + 1}
//               </p>
//               <div key={index} className="px-4 pb-3">
//                 <div className="mb-5 flex h-14 w-14 items-center mx-auto justify-center rounded-full bg-[#8B6B3E]/10">
//                   <Icon className="h-7 w-7 text-[#8B6B3E]" />
//                 </div>

//                 <h3 className="mb-3 text-xl font-semibold text-center">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm leading-7 text-gray-600">{item.desc}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
