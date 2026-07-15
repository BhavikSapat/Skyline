import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BedDouble, MapPin, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Property = () => {
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
    <section
      id="properties"
      className="relative w-full bg-gradient-to-t from-black/10 via-white/90 to-white px-5 sm:px-8 md:px-12 lg:px-20 py-14 lg:py-20"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 flex w-full items-center justify-center gap-3 sm:gap-6">
          <Separator className="flex-1 bg-[#8B6B3E]" />

          <h1 className="whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8B6B3E]">
            Featured Properties
          </h1>

          <Separator className="flex-1 bg-[#8B6B3E]" />
        </div>

        <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl">
          Explore our handpicked premium properties.
        </p>
      </div>

      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-2 sm:px-6 lg:px-10"
        >
          <CarouselContent>
            {keys.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
              >
                <div className="p-2">
                  <Card className="group overflow-hidden rounded-3xl border-0 p-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative h-60 sm:h-64 lg:h-56 w-full overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute right-3 top-3 rounded-full bg-white/20 px-3 py-1 text-xs sm:text-sm font-semibold text-white backdrop-blur-md">
                        {item.price}
                      </div>
                    </div>

                    <CardContent className="space-y-5 p-5">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">
                          {item.title}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-gray-500">
                          <MapPin className="h-4 w-4 shrink-0 text-[#8B6B3E]" />

                          <span className="text-sm sm:text-base">
                            {item.loc}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8F6F2] px-4 sm:px-6 py-3">
                        <div className="text-center">
                          <BedDouble className="mx-auto mb-1 h-5 w-5 text-[#8B6B3E]" />

                          <p className="text-[11px] sm:text-xs text-gray-500">
                            Bedrooms
                          </p>

                          <p className="text-sm sm:text-base font-semibold">
                            {item.bhk}
                          </p>
                        </div>

                        <div className="h-10 w-px bg-gray-300" />

                        <div className="text-center">
                          <Ruler className="mx-auto mb-1 h-5 w-5 text-[#8B6B3E]" />

                          <p className="text-[11px] sm:text-xs text-gray-500">
                            Area
                          </p>

                          <p className="text-sm sm:text-base font-semibold">
                            {item.size}
                          </p>
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
          <CarouselPrevious className="left-1 h-9 w-9 border bg-white/90 shadow-md hover:bg-white" />

          <CarouselNext className="right-1 h-9 w-9 border bg-white/90 shadow-md hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Property;
