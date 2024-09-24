import React from "react";
import ServiceSection from "@/components/section/ServiceSection";
import BrowsePropertiesSection from "@/components/section/BrowsePropertiesSection";
import ContactUsSection from "@/components/section/ContactUsSection";
import HeroSection from "@/components/section/HeroSection";

export const metadata = {
  title: "Home | Horizon Homes",
};

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <BrowsePropertiesSection />
      <ContactUsSection />
    </>
  );
}
