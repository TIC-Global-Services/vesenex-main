import SVGComponent from "@/components/Home/AustralianMap";
import CyberProtection from "@/components/Home/CyberProtection";
import DesignedForAus from "@/components/Home/DesignedForAus";
import DigitalAssets from "@/components/Home/DigitalAssets";
import Hero from "@/components/Home/Hero";
import WhyChooseVesenex from "@/components/Home/WhyChooseVesenex";
import BookAssessment from "@/components/Reusable/BookAssesment";

export default function Home() {
  return (
    <div>
      <Hero />
      <DesignedForAus />
      <CyberProtection />
      <DigitalAssets />
      <WhyChooseVesenex />
      <BookAssessment />
    </div>
  );
}
