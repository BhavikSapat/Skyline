import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const tabs = ["Home", "Properties", "About", "Contact"];
  return (
    <>
      <nav className="w-full border-b border-gray-200  bg-[#FAF8F4]">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex text-2xl font-bold font-serif text-[#8B6B3E]"
          >
            {/* <Image src="/favicon.ico" alt="logo" width={30} height={30} /> */}
            Skyline Realty
          </Link>

          <div className="hidden items-center gap-8 md:flex font-normal uppercase">
            {tabs.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="hover:text-[#8B6B3E]  transition-colors duration-300 "
              >
                {item}
              </Link>
            ))}
          </div>
          <Button className="hidden rounded-lg bg-[#6F532D] px-5 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#c2ae9b] md:block ">
            Contact
          </Button>
        </div>
      </nav>
    </>
  );
}
