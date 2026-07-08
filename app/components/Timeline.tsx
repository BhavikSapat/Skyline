import { Separator } from "@/components/ui/separator";
import { PhoneCall, House, FileCheck, KeyRound } from "lucide-react";

const Timeline = () => {
  const keys = [
    {
      number: "01",
      icon: PhoneCall,
      title: "Initial Consultation",
      desc: "Understand your budget, lifestyle and investment goals.",
    },
    {
      number: "02",
      icon: House,
      title: "Explore Properties",
      desc: "Visit carefully selected homes that match your needs.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Documentation",
      desc: "We handle legal paperwork, negotiations and verification.",
    },
    {
      number: "04",
      icon: KeyRound,
      title: "Get Your Keys",
      desc: "Complete the purchase and move into your dream property.",
    },
  ];

  return (
    <section className="relative w-full bg-[#F8F6F2] px-5 sm:px-8 md:px-12 lg:px-20 py-14 lg:py-20">
      {/* <Image
        src="/timeline-bg.webp"
        alt="Timeline Background"
        fill
        className="object-cover -z-10"
      /> */}

      <div className="flex flex-col items-center text-center">
        <div className="mb-8 flex w-full items-center justify-center gap-3 sm:gap-6">
          <Separator className="flex-1 bg-[#8B6B3E]" />

          <h1 className="whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8B6B3E]">
            How It Works
          </h1>

          <Separator className="flex-1 bg-[#8B6B3E]" />
        </div>

        <p className="max-w-2xl text-sm sm:text-base lg:text-xl text-gray-600">
          Simple, transparent, and guided at every step.
        </p>
      </div>

      <div className="relative mt-20 hidden lg:block">
        <div className="absolute left-0 right-0 top-6 h-[2px] bg-[#D8C8B4]" />

        <div className="grid grid-cols-4 gap-8">
          {keys.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative z-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-3"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#8B6B3E] bg-white shadow-lg transition duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#8B6B3E]" />
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#8B6B3E]">
                  {step.number}
                </h2>

                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-14 lg:hidden">
        <div className="absolute left-6 top-0 h-full w-[2px] bg-[#D8C8B4]" />

        <div className="space-y-10">
          {keys.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative flex gap-5">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#8B6B3E] bg-white shadow-md">
                  <Icon className="h-5 w-5 text-[#8B6B3E]" />
                </div>

                <div className="pb-2">
                  <p className="text-lg font-bold text-[#8B6B3E]">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
// import React from "react";
// import { Separator } from "@/components/ui/separator";
// import { PhoneCall, House, FileCheck, KeyRound } from "lucide-react";
// const Timeline = () => {
//   const keys = [
//     {
//       number: "01",
//       icon: PhoneCall,
//       title: "Initial Consultation",
//       short: "Consultation",
//       desc: "Understand your budget, lifestyle and investment goals.",
//     },
//     {
//       number: "02",
//       icon: House,
//       title: "Explore Properties",
//       short: "Property Tour",
//       desc: "Visit carefully selected homes that match your needs.",
//     },
//     {
//       number: "03",
//       icon: FileCheck,
//       short: "Documentation",
//       title: "Documentation",
//       desc: "We handle legal paperwork, negotiations and verification.",
//     },
//     {
//       number: "04",
//       icon: KeyRound,
//       short: "Move In",
//       title: "Get Your Keys",
//       desc: "Complete the purchase and move into your dream property.",
//     },
//   ];
//   return (
//     <section className="bg-[#F8F6F2] w-full px-20  py-18">
//       <div className="flex flex-col justify-center text-center py-15">
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
//       </div>
//       <div className="mb-20 hidden lg:block">
//         <div className="relative flex justify-between">
//           <div
//             className="absolute top-6 left-0 right-0 h-px bg-[#D8C8B4]"
//             gap-10
//           />

//           {keys.map((step) => {
//             const Icon = step.icon;
//             return (
//               <div
//                 key={step.number}
//                 className="relative z-10 flex flex-col items-center max-w-auto px-7 justify-center text-center group transition-all duration-300 hover:-translate-y-4"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#8B6B3E] bg-white shadow-lg">
//                   <Icon className="text-[#8B6B3E]" />
//                 </div>

//                 <span className="mt-4 text-xl font-bold text-[#8B6B3E]">
//                   {/* {step.number} */}
//                 </span>

//                 <p className="mt-2 font-semibold">
//                   <span className="mt-6 text-xl font-extrabold text-[#8B6B3E]/80">
//                     {step.number}.
//                   </span>{" "}
//                   {step.title}
//                 </p>
//                 <p className="mt-4 leading-7 text-gray-600 text-md">
//                   {step.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;
