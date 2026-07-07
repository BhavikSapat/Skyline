import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const tabs = [
    { title: "Home", link: "#hero" },
    { title: "About", link: "#whyus" },
    { title: "Properties", link: "#properties" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <>
      <nav className="sticky top-0 z-50 px-0">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-2 bg-[#6F532D]/20 backdrop-blur-sm">
          <Link
            href="/"
            className="flex text-3xl font-bold font-serif text-[#8B6B3E]"
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
          <div className="w-auto px-8 py-1.5 rounded-full bg-[#6F532D]/50 backdrop-blur-xl border ">
            <div className="hidden items-center gap-8 md:flex font-normal uppercase ">
              {tabs.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="tracking-wide text-white hover:text-[#8B6B3E]  transition-colors duration-300 scroll-smooth"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Button className="hidden rounded-lg bg-[#6F532D] px-5 py-4.5 md:inline-flex items-center justify-center  font-medium text-white transition-colors duration-300 hover:bg-[#c2ae9b]  ">
            Book Consultation
          </Button>
        </div>
      </nav>
    </>
  );
}
