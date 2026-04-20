import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";
import { FinalCta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Reviews />
      <FinalCta />
    </>
  );
}
