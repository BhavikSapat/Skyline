import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B2218] text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16 py-14">
        {/*
        <Image
          src="/footer-bg.webp"
          alt="Footer Background"
          fill
          className="object-cover -z-10"
        />
        */}

        {/* <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-2 md:text-left lg:grid-cols-3"> */}
        <div className="flex flex-col gap-12 text-center md:text-left md:flex-row md:items-start md:justify-between">
          <div className="md:max-w-md">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start text-2xl sm:text-3xl font-bold font-serif text-[#C8A46B]"
            >
              <Image
                src="/logo.png"
                className="mr-3"
                alt="logo"
                width={35}
                height={35}
              />
              Skyline Realty
            </Link>

            <p className="mt-5 leading-7 text-sm sm:text-base">
              Helping families find their dream homes with trust, transparency,
              and expert guidance.
            </p>

            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="rounded-lg border border-white/20 p-2 transition-all duration-300 hover:bg-[#6F532D] hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </Link>

              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="rounded-lg border border-white/20 p-2 transition-all duration-300 hover:bg-[#6F532D] hover:scale-110"
              >
                <FaFacebookF className="text-xl" />
              </Link>

              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="rounded-lg border border-white/20 p-2 transition-all duration-300 hover:bg-[#6F532D] hover:scale-110"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>

              <Link
                href="https://www.whatsapp.com/"
                target="_blank"
                className="rounded-lg border border-white/20 p-2 transition-all duration-300 hover:bg-[#6F532D] hover:scale-110"
              >
                <FaWhatsapp className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 md:gap-30 text-left">
            <div className="mx-auto md:w-fit">
              <h3 className="mb-5 text-lg font-semibold text-[#C8A46B]">
                Quick Links
              </h3>

              <ul className="space-y-3 ">
                <li>
                  <Link href="#hero" className="transition hover:text-white">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="#properties"
                    className="transition hover:text-white"
                  >
                    Properties
                  </Link>
                </li>

                <li>
                  <Link href="#whyus" className="transition hover:text-white">
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#testimonials"
                    className="transition hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>

                <li>
                  <Link href="#contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Separator
              orientation="vertical"
              className="h-auto my-2 bg-white/50"
            /> */}

            <div className="mx-auto">
              <h3 className="mb-5 text-lg font-semibold text-[#C8A46B]">
                Contact
              </h3>

              <div className="space-y-4">
                <Link
                  href="tel:+911234567890"
                  className="flex items-center justify-left gap-3 transition hover:text-white md:justify-start"
                >
                  <Phone size={18} className="text-[#C8A46B] shrink-0" />

                  <span>+91 12345 67890</span>
                </Link>

                <Link
                  href="mailto:hello@skylinerealty.com"
                  className="flex items-center justify-left gap-3 transition hover:text-white md:justify-start"
                >
                  <Mail size={18} className="text-[#C8A46B] shrink-0" />

                  <span>hello@skylinerealty.com</span>
                </Link>

                <Link
                  href="https://maps.google.com/?q=Mumbai,Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-left gap-3 transition hover:text-white md:justify-start"
                >
                  <MapPin size={18} className="text-[#C8A46B] shrink-0" />

                  <span>Mumbai, Maharashtra</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-[#8B6B3E]/40" />

        <div className="text-center text-xs sm:text-sm text-white/60">
          © 2026 Skyline Realty. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; // import Link from "next/link";
// import { Phone, Mail, MapPin } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <footer className="bg-[#2B2218] text-white/80 justify-between">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16  justify-between">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-between">
//           <div>
//             <Link
//               href="/"
//               className="flex text-3xl font-bold font-serif text-[#C8A46B]"
//             >
//               <Image
//                 src="/logo.png"
//                 className="mr-3"
//                 alt="logo"
//                 width={35}
//                 height={35}
//               />
//               Skyline Realty
//             </Link>

//             <p className="mt-5 leading-7">
//               Helping families find their dream homes with trust, transparency,
//               and expert guidance.
//             </p>

//             <div className="flex items-center gap-4 mt-6">
//               <Link
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 className="hover:text-white transition-all duration-300 border border-white-500 rounded-lg p-2 hover:bg-[#6F532D] hover:scale-120"
//               >
//                 <FaInstagram className="text-xl" />
//               </Link>

//               <Link
//                 target="_blank"
//                 href="https://www.facebook.com/"
//                 className="hover:text-white transition-all duration-300 border border-white-500 rounded-lg p-2 hover:bg-[#6F532D] hover:scale-120"
//               >
//                 <FaFacebookF className="text-xl" />
//               </Link>

//               <Link
//                 target="_blank"
//                 href="https://www.linkedin.com/"
//                 className="hover:text-white transition-all duration-300 border border-white-500 rounded-lg p-2 hover:bg-[#6F532D] hover:scale-120"
//               >
//                 <FaLinkedinIn className="text-xl" />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#C8A46B] mb-5">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">
//               <li>
//                 <Link href="#hero" className="hover:text-white transition-all">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="#properties"
//                   className="hover:text-white transition-all"
//                 >
//                   Properties
//                 </Link>
//               </li>

//               <li>
//                 <Link href="#about" className="hover:text-white transition-all">
//                   About
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="#testimonials"
//                   className="hover:text-white transition-all"
//                 >
//                   Testimonials
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="#contact"
//                   className="hover:text-white transition-all"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#C8A46B] mb-5">
//               Contact
//             </h3>

//             <div className="space-y-4">
//               <Link
//                 href="tel:+911234567890"
//                 className="flex items-center gap-3 hover:text-white transition-all duration-300"
//               >
//                 <Phone size={18} className="text-[#C8A46B]" />
//                 <span>+91 12345 67890</span>
//               </Link>

//               <Link
//                 href="mailto:demo@gmail.com"
//                 className="flex items-center gap-3 hover:text-white transition-all duration-300"
//               >
//                 <Mail size={18} className="text-[#C8A46B]" />
//                 <span>hello@skylinerealty.com</span>
//               </Link>

//               <Link
//                 href="https://maps.google.com/?q=Mumbai,Maharashtra"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 hover:text-white transition-all duration-300"
//               >
//                 <MapPin size={18} className="text-[#C8A46B] shrink-0" />
//                 <span>Mumbai, Maharashtra</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <Separator className="bg-[#8B6B3E]/40 my-10" />

//         {/* Bottom */}
//         <div className="text-center text-sm text-white/60 pb-10">
//           © 2026 Skyline Realty. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
