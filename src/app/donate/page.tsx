import HeaderNav from "@/components/HeaderNav";
import { Card } from "@/components/ui/card";
import { DotIcon, TriangleAlert } from "lucide-react";
import Image from "next/image";
import React from "react";
import new_logo from "@/images/new_small_logo.png";
import Donationmodal2 from "./donationmodal";

const DonationPage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <div className="pt-16 pb-8 bg-gray-950 h-[520px]">
        <div className="max-w-7xl mx-auto h-full px-4 flex flex-col justify-center text-white space-y-2">
          <h1
            // className="text-7xl font-bold "
            className="bg-gradient-to-r from-blue-600 via-blue-50 via-15% to-purple-100 bg-clip-text text-transparent text-7xl font-bold"
          >
            Donation
          </h1>
          <h3 className="font-semibold flex items-center text-lg">
            <span>Home</span>
            <DotIcon className="size-10 text-gray-400" />
            <span className="text-primary">Donate</span>
          </h3>
        </div>
      </div>

      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <Card className="p-8 md:p-16 lg:p-24 border-0 bg-card/50">
            <div className="flex items-center gap-4 w-full">
              <div>
                <Image src={new_logo} alt="logo" className="size-6" />
              </div>
              <h3 className="uppercase shrink-0 text-sm md:text-md lg:text-lg font-mono">
                Donate Now
              </h3>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Your Support Matters
            </h1>

            <p className=" text-muted-foreground text-xs md:text-sm lg:text-base">
              Your donation is more than just financial support; it is a
              powerful act of kindness that drives meaningful change. Every
              contribution helps provide essential resources, support impactful
              programs, and empower communities in need.
            </p>

            <div className="z-10">
              <div className="mt-4 bg-blue-200/30 relative px-10 py-6 border-l-4 border-blue-500 text-xs md:text-sm lg:text-base text-blue-800">
                <h2>
                  <b>Notice:</b> Test mode is enabled. While in test mode, no
                  live donations will be processed.
                </h2>

                <div className="absolute bg-blue-500 rounded-full flex p-2 top-1/2 -translate-y-1/2 -left-5">
                  <div>
                    <TriangleAlert className="size-5 text-white" />
                  </div>
                </div>
              </div>

              <Donationmodal2 />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
