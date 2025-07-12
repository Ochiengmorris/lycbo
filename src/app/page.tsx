import HeaderNav from "@/components/HeaderNav";
import LandingBanner from "@/components/sections/LandingBanner ";
import InfinteTextSlider from "@/components/InfinteTextSlider";
import Services from "@/components/sections/Services";
import WhatWeDo from "@/components/sections/WhatWeDo";
import LatestPost from "@/components/sections/LatestPost";
import OurImpact from "@/components/sections/OurImpact";
import WhyUs from "@/components/sections/WhyUs";
import OurCauses from "@/components/sections/OurCauses";
import AboutUs from "@/components/sections/AboutUs";
import DonationSection from "@/components/sections/Donations";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <LandingBanner />

      <AboutUs />

      <Services />

      <WhatWeDo />

      <OurCauses />

      <WhyUs />

      <OurImpact />

      <div className="bg-blue-50 pb-20">
        <div className="w-full">
          <InfinteTextSlider />
        </div>
      </div>

      <DonationSection />

      <LatestPost />
    </div>
  );
}
