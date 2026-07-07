import { Building2, Handshake, TrendingUp, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BedDouble, MapPin, Ruler } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// IMAGE

// Luxury Villa

// Mumbai, Maharashtra

// ₹2.45 Cr

// 3 BHK

// 2400 sq.ft

// [ View Details ]

const WhyUs = () => {
  const keys = [
    {
      img: "/v1.webp",
      title: "Luxury Villa",
      loc: "Mumbai, Maharashtra",
      price: "₹2.45 Cr",
      bhk: "3 BHK",
      size: "2400 sq.ft",
    },
    {
      img: "/v2.webp",
      title: "Modern Apartment",
      loc: "Pune, Maharashtra",
      price: "₹1.15 Cr",
      bhk: "2 BHK",
      size: "1250 sq.ft",
    },
    {
      img: "/v3.webp",
      title: "Sea View Penthouse",
      loc: "Goa",
      price: "₹4.80 Cr",
      bhk: "4 BHK",
      size: "3600 sq.ft",
    },
    {
      img: "/v4.webp",
      title: "Premium Duplex",
      loc: "Bengaluru, Karnataka",
      price: "₹2.10 Cr",
      bhk: "3 BHK",
      size: "2100 sq.ft",
    },
    {
      img: "/v5.webp",
      title: "Urban Studio",
      loc: "Hyderabad, Telangana",
      price: "₹78 Lakh",
      bhk: "1 BHK",
      size: "750 sq.ft",
    },
    {
      img: "/v6.webp",
      title: "Garden Villa",
      loc: "Ahmedabad, Gujarat",
      price: "₹1.95 Cr",
      bhk: "4 BHK",
      size: "2850 sq.ft",
    },
    {
      img: "/v7.webp",
      title: "Luxury Residence",
      loc: "Delhi",
      price: "₹3.25 Cr",
      bhk: "4 BHK",
      size: "3200 sq.ft",
    },
  ];
  return (
    <section className="bg-gradient-to-t from-black/10 via-white/90 to-white/100 w-full px-20 pb-5 z-20">
      <div className="flex flex-col justify-center text-center py-10">
        <div className="my-10 flex items-center justify-center gap-6">
          <Separator className="flex-1 bg-[#8B6B3E]" />
          <h1 className="whitespace-nowrap text-4xl font-bold text-[#8B6B3E]">
            Featured Properties
          </h1>
          <Separator className="flex-1 bg-[#8B6B3E]" />
        </div>
        <p className="text-xl">Explore our handpicked premium properties.</p>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-10"
        >
          <CarouselContent>
            {keys.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-2">
                  <Card className="overflow-hidden p-0 rounded-3xl border-0 shadow-md transition-all duration-500 hover:-translate-y-2 ">
                    <div className="relative h-54 w-full">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover object-top hover:scale-125 duration-500"
                      />

                      <div className="absolute right-4 top-4 rounded-full  px-4 py-1 text-sm font-semibold text-white shadow-lg backdrop-blur-sm bg-white/10">
                        {item.price}
                      </div>
                    </div>

                    <CardContent className="space-y-4 px-4 py-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>

                        <div className="mt-2 flex items-center gap-2 text-gray-500">
                          <MapPin className="h-4 w-4 text-[#8B6B3E]" />
                          <span>{item.loc}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8F6F2] px-6 py-2">
                        <div className="text-center justify-between">
                          <BedDouble className="mx-auto mb-1 h-5 w-5 text-[#8B6B3E]" />
                          <p className="text-xs text-gray-500">Bedrooms</p>
                          <p className="font-semibold">{item.bhk}</p>
                        </div>

                        <div className="h-10 w-px bg-gray-300" />

                        <div className="text-center">
                          <Ruler className="mx-auto mb-1 h-5 w-5 text-[#8B6B3E]" />
                          <p className="text-xs text-gray-500">Area</p>
                          <p className="font-semibold">{item.size}</p>
                        </div>
                      </div>

                      {/* <Button className="w-full bg-[#8B6B3E] hover:bg-[#6F532D]">
                        View Details
                      </Button> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default WhyUs;
