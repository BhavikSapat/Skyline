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
  const { register, handleSubmit } = useForm<IFormInput>();

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

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-t from-black/10 via-white/90 to-white px-5 sm:px-8 md:px-12 lg:px-20 py-14 lg:py-20"
    >
      {/*
      <Image
        src="/contact-bg.webp"
        alt="Contact Background"
        fill
        className="object-cover -z-10"
      />
      */}

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 rounded-2xl border border-[#8B6B3E] p-6 sm:p-8 lg:p-10 z-60">
        <div className="w-full lg:max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend className="text-2xl font-bold text-[#8B6B3E]">
                  Consult with Expert
                </FieldLegend>

                <FieldDescription className="mt-2">
                  Fill in your details and our team will contact you.
                </FieldDescription>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <Input {...register("budget")} placeholder="₹50 Lakhs" />
                  </Field>

                  <Field>
                    <FieldLabel>Property Type</FieldLabel>
                    <Input {...register("propertyType")} placeholder="Villa" />
                  </Field>

                  <Field>
                    <FieldLabel>City</FieldLabel>
                    <Input {...register("city")} placeholder="Mumbai" />
                  </Field>

                  <Field className="sm:col-span-2">
                    <FieldLabel>Query</FieldLabel>
                    <Input
                      {...register("query")}
                      placeholder="Tell us what you're looking for..."
                    />
                  </Field>

                  <Button
                    type="submit"
                    className="sm:col-span-2 bg-[#8B6B3E] hover:bg-[#6F532D]"
                  >
                    Send Inquiry
                  </Button>
                </div>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>
        <div className="w-full lg:max-w-md text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8B6B3E] leading-tight">
            Ready to Find Your Dream Property?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-8">
            Let's help you discover the perfect property that matches your
            lifestyle and investment goals. Fill out the form and one of our
            experts will get in touch with you shortly.
          </p>
          <div className="flex justify-left">
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 ">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Free Consultation</span>
              </div>

              <div className="flex items-center gap-3 ">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Verified Properties</span>
              </div>

              <div className="flex items-center gap-3 ">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Response within 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
