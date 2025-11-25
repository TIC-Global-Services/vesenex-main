import Header from "@/components/Company/Header";
import Human from "@/components/Company/Human";
import MissionVision from "@/components/Company/MissionVision";
import OurValuesSection from "@/components/Company/OurValues";
import SpotlightSection from "@/components/Company/Spotlight";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <SpotlightSection />
      <MissionVision />
      <Human />
      <OurValuesSection />
    </div>
  );
};

export default page;
