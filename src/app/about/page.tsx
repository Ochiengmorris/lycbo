import HeaderNav from "@/components/HeaderNav";
import AboutUs from "@/components/sections/AboutUs";
import {
  ArrowRightCircle,
  CheckCheck,
  DotIcon,
  HandCoinsIcon,
  LucideDroplets,
  LucideHouse,
  Send,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import whatwedo1 from "@/images/FxmUtvGWcAEpkeQ.jpg";
import whatwedo2 from "@/images/lycbo-img2.jpg";
import new_logo from "@/images/new_small_logo.png";
import HelpIcon from "@/images/icons/HelpIcon";
import WhyUs from "@/components/sections/WhyUs";

const AboutUsPage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <div className="pt-16 pb-8 bg-gray-950 h-[520px]">
        <div className="max-w-7xl mx-auto h-full px-4 flex flex-col justify-center text-white space-y-2">
          <h1 className="text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-60% via-blue-50 to-purple-50 bg-clip-text text-transparent">
              About
            </span>{" "}
            Us
          </h1>
          <h3 className="font-semibold flex items-center text-lg">
            <span>Home</span>
            <DotIcon className="size-10 text-gray-400" />
            <span className="text-primary">About Us</span>
          </h3>
        </div>
      </div>

      <AboutUs />

      <section className="bg-accent/70">
        <div className="max-w-7xl mx-auto py-24 w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <Image src={new_logo} alt="logo" className="size-6" />
                </div>
                <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide">
                  Our Approach
                </h3>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
                Compassionate solutions for lasting impact
              </h1>

              <p className="mt-4 xl:mt-6 text-muted-foreground text-sm lg:text-base">
                Our approach focuses on creating sustainable change by
                addressing root causes, empowering communities, and delivering
                compassionate solutions.
              </p>

              <button className="px-6 py-4 mt-4 xl:mt-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-2 group font-semibold duration-300 w-fit text-sm lg:text-base hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer z-10  transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span>Contact Now</span>
                <div>
                  <ArrowRightCircle className="size-5" />
                </div>
              </button>
            </div>

            <div className="relative mt-12 lg:mt-0 border aspect-square">
              <div className="h-10/12 group relative ml-auto bg-blue-800 rounded-2xl overflow-hidden">
                <div className="w-full h-full">
                  <Image
                    src={whatwedo2}
                    alt="what-we-do"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
            </div>

            <div className="absolute grid grid-cols-4 gap-x-3 -bottom-10 -left-14">
              {["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"].map(
                (item, index) => (
                  <span key={index} className="text-primary text-xl">
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="absolute w-9/12 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex bottom-0">
              <div className="flex flex-col gap-4 flex-1 px-4 border-r">
                <div className="relative w-fit">
                  <HelpIcon />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                </div>
                <h3 className="font-bold text-xl">Our Mission</h3>
                <p className="text-muted-foreground text-xs lg:text-sm">
                  To nurture, empower and transform local youths to be
                  self-reliant, independent and key players in their community.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-1 px-4 border-r">
                <div className="relative w-fit">
                  <HelpIcon />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                </div>
                <h3 className="font-bold text-xl">Our Vision</h3>
                <p className="text-muted-foreground text-xs lg:text-sm">
                  A healthy and empowered community.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-1 px-4">
                <div className="relative w-fit">
                  <HelpIcon />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                </div>
                <h3 className="font-bold text-xl">Our Value</h3>
                <p className="text-muted-foreground text-xs lg:text-sm">
                  We strive to create a community where everyone has the
                  opportunity to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <div className="bg-blue-50 pb-24">
        <section className="bg-gradient-to-r from-gray-950 via-blue-50 to-blue-50 relative">
          <div className="absolute bg-gray-950 w-1/2 h-full"></div>
          <div className="max-w-7xl mx-auto w-full ">
            <div className="relative w-7/12 bg-gray-950 h-full pr-20 py-24 rounded-r-4xl">
              <div>
                <div className="flex items-center gap-4">
                  <div>
                    <Image src={new_logo} alt="logo" className="size-6" />
                  </div>
                  <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide text-accent">
                    How We help
                  </h3>
                </div>

                <h1 className="text-3xl text-accent md:text-4xl lg:text-5xl font-bold mt-4">
                  Bringing hope to every community
                </h1>

                <p className="mt-4 xl:mt-6 text-muted text-sm lg:text-base">
                  We work tirelessly to uplift communities by providing
                  resources, support, and sustainable solutions, fostering hope
                  and creating brighter futures.
                </p>

                <div className="my-8 flex flex-col gap-2">
                  {[
                    "Community-Centered Approach",
                    "Transparency and Accountability",
                    "Volunteer and Donor Engagement",
                  ].map((text, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="relative">
                        <div>
                          <CheckCheck className="size-10 text-muted" />
                        </div>
                        <div className="absolute left-1/2  -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square" />
                      </div>
                      <span className="ml-2 text-muted">{text}</span>
                    </div>
                  ))}
                </div>

                <button className="px-6 py-4 mt-4 xl:mt-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-2 group font-semibold duration-300 w-fit text-sm lg:text-base hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer z-10  transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span>Contact Now</span>
                  <div>
                    <ArrowRightCircle className="size-5" />
                  </div>
                </button>
              </div>

              <div className="absolute z-20 border-accent-foreground w-full py-24 h-full -right-3/4 top-0 grid grid-cols-2 gap-8 px-18">
                <div className="bg-blue-50 border rounded-2xl border-black flex flex-col items-center justify-center">
                  <div className="relative w-fit">
                    <HelpIcon size={60} />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                  </div>
                  <span className="font-bold text-xl mt-2">
                    Healthcare Access
                  </span>
                  <p className="text-muted-foreground mt-2 text-xs lg:text-sm text-center">
                    Providing medical care, health education, and wellness
                    resources.
                  </p>
                </div>
                <div className="bg-blue-50 border rounded-2xl border-black flex flex-col items-center justify-center">
                  <div className="relative w-fit">
                    <HelpIcon size={60} />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                  </div>
                  <span className="font-bold text-xl mt-2">
                    Healthcare Access
                  </span>
                  <p className="text-muted-foreground mt-2 text-xs lg:text-sm text-center">
                    Providing medical care, health education, and wellness
                    resources.
                  </p>
                </div>
                <div className="bg-blue-50 border rounded-2xl border-black flex flex-col items-center justify-center">
                  <div className="relative w-fit">
                    <HelpIcon size={60} />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                  </div>
                  <span className="font-bold text-xl mt-2">
                    Healthcare Access
                  </span>
                  <p className="text-muted-foreground mt-2 text-xs lg:text-sm text-center">
                    Providing medical care, health education, and wellness
                    resources.
                  </p>
                </div>
                <div className="bg-blue-50 border rounded-2xl border-black flex flex-col items-center justify-center">
                  <div className="relative w-fit">
                    <HelpIcon size={60} />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-6 rounded-full aspect-square" />
                  </div>
                  <span className="font-bold text-xl mt-2">
                    Healthcare Access
                  </span>
                  <p className="text-muted-foreground mt-2 text-xs lg:text-sm text-center">
                    Providing medical care, health education, and wellness
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
