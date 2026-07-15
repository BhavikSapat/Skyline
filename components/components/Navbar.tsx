import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const tabs = [
    { title: "Home", link: "#hero" },
    { title: "About", link: "#whyus" },
    { title: "Properties", link: "#properties" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 bg-gradient-to-r from-white/90 via-[#F5E6C8]/70 to-[#C8A46B]/70 backdrop-blur-sm ">
        <Link
          href="/"
          className="flex items-center text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#8B6B3E]"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={35}
            height={35}
            className="mr-2 sm:mr-3 w-8 h-8 sm:w-9 sm:h-9"
          />

          <span>Skyline Realty</span>
        </Link>

        <div className="hidden md:block rounded-full bg-[#6F532D]/50 backdrop-blur-xl border px-1 py-1">
          <div className="flex items-center gap-4 uppercase text-sm ">
            {tabs.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-white transition hover:text-[#C8A46B] hover:bg-[white] rounded-full px-2 py-1 transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Link href="#contact" className="hidden md:block">
          <Button className="rounded-lg bg-[#6F532D]/20 bg-white/80 px-5 py-5 text-[#6F532D] transition hover:scale-110 hover:bg-[#6F532D]/80 hover:text-white hover:border">
            Book Consultation
          </Button>
        </Link>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#2B2218] border-none text-white px-5"
            >
              <div className="mt-10 flex flex-col gap-7">
                {tabs.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="text-lg hover:text-[#C8A46B]"
                  >
                    {item.title}
                  </Link>
                ))}

                <Link href="#contact">
                  <Button className="w-full bg-[#6F532D] mt-4">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
