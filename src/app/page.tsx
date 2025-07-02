import HeaderNav from "@/components/HeaderNav";
import LandingBanner from "@/components/LandingBanner ";
import Image from "next/image";
import female_teacher from "@/images/FxmUtvGWcAEpkeQ.jpg";
import trusted from "@/images/trusted.png";
import new_logo from "@/images/new_small_logo.png";
import {
  Ambulance,
  ArrowRightCircle,
  ChartSpline,
  School2,
  VenusAndMars,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <LandingBanner />

      <div className="bg-accent py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 px-4 lg:px-16 w-full">
            <div className="aspect-square overflow-hidden flex flex-col relative p-4 gap-2">
              {/* <Image
                src={female_teacher}
                alt="Education"
                className="object-cover w-full h-full"
              /> */}
              <div className="w-3/4 rounded-2xl place-self-end p-2 aspect-square">
                <div className="w-full h-full bg-amber-300 rounded-2xl"></div>
              </div>
              <div className="bg-amber-700 z-10 aspect-square w-1/4 rounded-2xl justify-self-end place-self-end"></div>
              <div className="absolute -bottom-2 rounded-2xl bg-accent left-4 w-8/12 aspect-square p-4">
                <div className="bg-black rounded-2xl w-full h-full"></div>
              </div>
            </div>

            <div className=" space-y-4 gap-0 bg-accent/50 px-6 py-10 overflow-hidden">
              <div className="flex items-center gap-4 w-full">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase shrink-0 font-semibold">About us</h3>
              </div>

              <div className="h-full mt-4">
                <h1 className="text-5xl font-bold">
                  United in compassion, Changing lives
                </h1>
                <p className="mt-6 text-muted-foreground">
                  Driven by compassion and a shared vision, we work hand-in-hand
                  with communities to create meaningful change.
                </p>

                <div className="flex  mt-8 grow">
                  <div className="w-4/6 justify-between flex flex-col">
                    <div className="flex flex-col items-start w-full gap-4">
                      <Image src={new_logo} alt="logo" className="size-6" />
                      <h3 className="uppercase shrink-0 font-semibold">
                        HealthCare Support
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Providing essential healthcare services and resources to
                        communities
                      </p>
                    </div>

                    <button className="px-6 py-4  rounded-full flex items-center gap-2 group font-semibold transition duration-300 w-fit bg-primary hover:bg-primary/90 text-white cursor-pointer">
                      About Us
                      <ArrowRightCircle className="size-5 transform group-hover:translate-x-1 transition duration-300" />
                    </button>
                  </div>
                  <div className="flex-1 bg-gray-300 rounded-2xl p-4 w-full">
                    <div className="bg-accent w-3/4 mx-auto rounded-full aspect-square"></div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl text-primary">75,958</h3>
                      <h2 className="font-bold">Helper Fund</h2>
                      <p className="text-muted-foreground text-xs">
                        Supporting growth through community- funding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center justify-center flex-col border-r border-b">
                <School2 className="w-8 h-8 text-primary mb-2" />
                <h2 className="text-sm font-semibold text-center text-primary">
                  Education and
                  <br /> Training
                </h2>
              </div>
              <div className="flex items-center justify-center flex-col border-b">
                <School2 className="w-8 h-8 text-primary mb-2" />
                <h2 className="text-sm font-semibold text-center text-primary">
                  Child Rights
                  <br /> Governance
                </h2>
              </div>
              <div className="flex items-center justify-center flex-col border-r border-b">
                <School2 className="w-8 h-8 text-primary mb-2" />
                <h2 className="text-sm font-semibold text-center text-primary">
                  Youth <br /> Development
                </h2>
              </div>
              <div className="flex items-center justify-center flex-col border-b">
                <Ambulance className="w-8 h-8 text-primary mb-2" />
                <h2 className="text-sm font-semibold text-center text-primary">
                  Health and <br /> Medical Care
                </h2>
              </div>
              <div className="flex items-center justify-center flex-col border-r">
                <VenusAndMars className="w-8 h-8 text-primary mb-2" />
                <h2 className="text-sm font-semibold text-center text-primary">
                  Gender <br /> Empowerment
                </h2>
              </div>
              <div className="flex items-center justify-center flex-col">
                <ChartSpline className="w-8 h-8 text-primary mb-2" />
                <h2 className="text-sm font-semibold text-center text-primary">
                  Economic <br /> Empowerment
                </h2>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
