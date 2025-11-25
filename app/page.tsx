import CyberProtection from "@/components/Home/CyberProtection";
import DigitalAssets from "@/components/Home/DigitalAssets";
import Hero from "@/components/Home/Hero";
import WhyChooseVesenex from "@/components/Home/WhyChooseVesenex";
import BookAssessment from "@/components/Reusable/BookAssesment";

export default function Home() {
  return (
    <div>
      <Hero />
      <CyberProtection />
      <DigitalAssets />
      <WhyChooseVesenex />
      <BookAssessment />
    </div>
  );
}
