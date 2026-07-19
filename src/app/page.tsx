import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Services />
      <Portfolio />
      <ProcessSteps />
      <PricingCalculator />
      <Reviews />
      <FAQ />
      <ContactForm />
    </>
  );
}
