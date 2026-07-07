"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  fullName: string;
  phone: string;
  email: string;
  budget: string;
  propertyType: string;
  city: string;
  query: string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const phoneNumber = "9028965101";

    const textMessage = `🏡 *New Property Inquiry*

Full Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Property Type: ${data.propertyType}
Budget: ${data.budget}
City: ${data.city}

Query:
${data.query}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-t from-black/10 via-white/90 to-white py-10 px-20"
    >
      <div className="flex items-center justify-between rounded-xl border border-[#8B6B3E] p-8 gap-12">
        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Consult with Expert</FieldLegend>

                <FieldDescription>
                  Fill in your details and our team will contact you.
                </FieldDescription>

                <div className="grid grid-cols-2 gap-5 mt-6">
                  <Field>
                    <FieldLabel>Full Name</FieldLabel>
                    <Input
                      {...register("fullName")}
                      placeholder="Bhavik Sapat"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Phone</FieldLabel>
                    <Input
                      {...register("phone")}
                      placeholder="+91 1234567890"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="bhavik@gmail.com"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Budget</FieldLabel>
                    <Input placeholder="₹50 Lakhs" {...register("budget")} />
                  </Field>

                  <Field>
                    <FieldLabel>Property Type</FieldLabel>
                    <Input placeholder="Villa" {...register("propertyType")} />
                  </Field>

                  <Field>
                    <FieldLabel>City</FieldLabel>
                    <Input placeholder="Mumbai" {...register("city")} />
                  </Field>

                  <Field className="col-span-2">
                    <FieldLabel>Query</FieldLabel>
                    <Input
                      placeholder="Tell us what you're looking for..."
                      {...register("query")}
                    />
                  </Field>

                  <Button
                    type="submit"
                    className="col-span-2 bg-[#8B6B3E] hover:bg-[#6F532D]"
                  >
                    Send Inquiry
                  </Button>
                </div>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>

        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-[#8B6B3E] mb-10">
            Ready to Find Your Dream Property?
          </h2>

          <p className="text-lg text-muted-foreground leading-8 mb-5">
            Let's help you discover the perfect property that matches your
            lifestyle and investment goals. Fill out the form and one of our
            experts will get in touch with you shortly.
          </p>
          <p className="flex gap-3 p-4">
            <p className="text-green-500">✓</p> Free Consultation <br />
            <p className="text-green-500">✓</p>
            Verified Properties <br />
            <p className="text-green-500">✓</p> Response within 24 Hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

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
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldLegend,
//   FieldSeparator,
//   FieldSet,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// const Testimonials = () => {
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
//         <div className="w-full max-w-md flex flex-row ">
//           <form>
//             <FieldGroup>
//               <FieldSet>
//                 <FieldLegend>Consult with Expert</FieldLegend>
//                 <FieldDescription>Fill the details properly</FieldDescription>
//                 <FieldGroup>
//                   <div className="flex flex-col">
//                     <Field>
//                       <FieldLabel>Full Name</FieldLabel>
//                       <Input placeholder="Evil Rabbit" required />
//                     </Field>
//                     <Field>
//                       <FieldLabel>Email</FieldLabel>
//                       <Input placeholder="Evil Rabbit" required />
//                     </Field>
//                     <Field>
//                       <FieldLabel>Property Type </FieldLabel>
//                       <Input placeholder="Evil Rabbit" required />
//                     </Field>
//                     <Field>
//                       <FieldLabel>Query</FieldLabel>
//                       <Input placeholder="Evil Rabbit" required />
//                     </Field>
//                   </div>
//                   <div className="flex flex-col">
//                     <Field>
//                       <FieldLabel>Phone</FieldLabel>
//                       <Input placeholder="1234 5678 9012 3456" required />
//                       <FieldDescription>
//                         Enter your 10-digit phone number
//                       </FieldDescription>
//                     </Field>
//                     <Field>
//                       <FieldLabel>Budget</FieldLabel>
//                       <Input placeholder="Evil Rabbit" required />
//                     </Field>
//                     <Field>
//                       <FieldLabel>City</FieldLabel>
//                       <Input placeholder="Evil Rabbit" required />
//                     </Field>
//                     <Field orientation="horizontal">
//                       <Button type="submit" className="w-full">
//                         Send
//                       </Button>
//                     </Field>
//                   </div>
//                 </FieldGroup>
//               </FieldSet>
//             </FieldGroup>
//           </form>
//         </div>
//         <div className="max-w-[30vw]">
//           <h1 className="whitespace-wrap text-4xl font-bold text-[#8B6B3E] py-15">
//             Ready to Find Your Dream Property?
//           </h1>
//           <p className="text-xl">
//             Let's help you discover the perfect property that matches your
//             lifestyle and investment goals.
//           </p>
//           {/* <Link href="#testimonials">
//             <div className="flex py-7 text-black/70 gap-3 items-center hover:underline">
//               <p>View All Reviews from our Clients</p>
//               <ArrowUpRight className="h-5 w-5" />
//             </div>
//           </Link> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
// //
// import { Button } from "@/components/ui/button";

// export function FieldDemo() {
//   return (
//     <div className="w-full max-w-md">
//       <form>
//         <FieldGroup>
//           <FieldSet>
//             <FieldLegend>Payment Method</FieldLegend>
//             <FieldDescription>
//               All transactions are secure and encrypted
//             </FieldDescription>
//             <FieldGroup>
//               <Field>
//                 <FieldLabel htmlFor="checkout-7j9-card-name-43j">
//                   Name on Card
//                 </FieldLabel>
//                 <Input
//                   id="checkout-7j9-card-name-43j"
//                   placeholder="Evil Rabbit"
//                   required
//                 />
//               </Field>
//               <Field>
//                 <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
//                   Card Number
//                 </FieldLabel>
//                 <Input
//                   id="checkout-7j9-card-number-uw1"
//                   placeholder="1234 5678 9012 3456"
//                   required
//                 />
//                 <FieldDescription>
//                   Enter your 16-digit card number
//                 </FieldDescription>
//               </Field>
//               <div className="grid grid-cols-3 gap-4">
//                 <Field>
//                   <FieldLabel htmlFor="checkout-exp-month-ts6">
//                     Month
//                   </FieldLabel>
//                   <Select items={months}>
//                     <SelectTrigger id="checkout-exp-month-ts6">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         {months.map((item) => (
//                           <SelectItem key={item.value} value={item.value}>
//                             {item.label}
//                           </SelectItem>
//                         ))}
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </Field>
//                 <Field>
//                   <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
//                     Year
//                   </FieldLabel>
//                   <Select items={years}>
//                     <SelectTrigger id="checkout-7j9-exp-year-f59">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         {years.map((item) => (
//                           <SelectItem key={item.value} value={item.value}>
//                             {item.label}
//                           </SelectItem>
//                         ))}
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </Field>
//                 <Field>
//                   <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
//                   <Input id="checkout-7j9-cvv" placeholder="123" required />
//                 </Field>
//               </div>
//             </FieldGroup>
//           </FieldSet>
//           <FieldSeparator />
//           <FieldSet>
//             <FieldLegend>Billing Address</FieldLegend>
//             <FieldDescription>
//               The billing address associated with your payment method
//             </FieldDescription>
//             <FieldGroup>
//               <Field orientation="horizontal">
//                 <Checkbox
//                   id="checkout-7j9-same-as-shipping-wgm"
//                   defaultChecked
//                 />
//                 <FieldLabel
//                   htmlFor="checkout-7j9-same-as-shipping-wgm"
//                   className="font-normal"
//                 >
//                   Same as shipping address
//                 </FieldLabel>
//               </Field>
//             </FieldGroup>
//           </FieldSet>
//           <FieldSet>
//             <FieldGroup>
//               <Field>
//                 <FieldLabel htmlFor="checkout-7j9-optional-comments">
//                   Comments
//                 </FieldLabel>
//                 <Textarea
//                   id="checkout-7j9-optional-comments"
//                   placeholder="Add any additional comments"
//                   className="resize-none"
//                 />
//               </Field>
//             </FieldGroup>
//           </FieldSet>
//           <Field orientation="horizontal">
//             <Button type="submit">Submit</Button>
//             <Button variant="outline" type="button">
//               Cancel
//             </Button>
//           </Field>
//         </FieldGroup>
//       </form>
//     </div>
//   );
// }
