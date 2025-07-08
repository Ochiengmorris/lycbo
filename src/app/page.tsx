import HeaderNav from "@/components/HeaderNav";
import LandingBanner from "@/components/LandingBanner ";
import Image from "next/image";
import female_teacher from "@/images/FxmUtvGWcAEpkeQ.jpg";
import new_logo from "@/images/new_small_logo.png";
import {
  ArrowRightCircle,
  HandCoinsIcon,
  LucideArrowRightCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <LandingBanner />

      <div className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 xl:px-16 w-full relative">
            <div className="absolute grid grid-cols-4 gap-x-3 -top-16 -right-24">
              {["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"].map(
                (item, index) => (
                  <span key={index} className="text-primary text-xl">
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="aspect-square overflow-hidden flex flex-col relative p-4 gap-2 rounded-xl">
              <div className="w-3/4 rounded-2xl place-self-end pb-2 aspect-square">
                <div className="w-full h-full bg-amber-300 rounded-2xl"></div>
              </div>
              <div className="bg-amber-700 z-10 aspect-square w-1/4 rounded-2xl justify-self-end place-self-end"></div>
              <div className="absolute -bottom-2 rounded-2xl bg-blue-50 left-4 w-8/12 aspect-square p-4">
                <div className="bg-black rounded-2xl w-full h-full"></div>
              </div>
            </div>

            <div className=" gap-0 bg-blue-50/50 px-6 py-10 overflow-hidden aspect-square rounded-xl">
              <div className="flex items-center gap-4 w-full">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase shrink-0 font-semibold text-xl font-mono tracking-widest">
                  About us
                </h3>
              </div>

              <div className="h-full mt-4">
                <h1 className=" text-4xl xl:text-5xl font-bold">
                  United in compassion, Changing lives
                </h1>
                <p className="mt-4 xl:mt-6 text-muted-foreground">
                  Driven by compassion and a shared vision, we work hand-in-hand
                  with communities to create meaningful change.
                </p>

                <div className="flex  mt-8 grow">
                  <div className="w-5/8 justify-between flex flex-col">
                    <div className="flex flex-col items-start w-full gap-4">
                      <Image src={new_logo} alt="logo" className="size-8" />
                      <h3 className="uppercase shrink-0 font-semibold">
                        HealthCare Support
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Providing essential healthcare services and resources to
                        communities
                      </p>
                    </div>

                    <button className="px-6 py-4  rounded-full flex items-center gap-2 group font-semibold transition duration-300 w-fit  bg-primary hover:bg-blue-800 text-white cursor-pointer z-10">
                      About Us
                      <ArrowRightCircle className="size-5 transform group-hover:translate-x-1 transition duration-300" />
                    </button>
                  </div>
                  <div className="flex-1 bg-gray-300 rounded-2xl p-4 w-full">
                    <div className="bg-accent w-2/4 mx-auto rounded-full aspect-square overflow-hidden">
                      <Image src={female_teacher} alt="female logo" />
                    </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent/70">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Image src={new_logo} alt="logo" className="size-6" />
              <h3 className="uppercase text-xl shrink-0 font-semibold font-mono tracking-widest">
                Services
              </h3>
            </div>

            <h1 className="font-semibold text-5xl mt-4">
              Our comprehensive services
            </h1>
            <p className="text-muted-foreground mt-8 text-center">
              Our services are focused on creating lasting change through
              community development, healthcare <br /> access, educational
              support, and emergency relief.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 relative">
            {[
              { title: "Educational Support" },
              { title: "Healthcare Access" },
              { title: "Food Security Initiative" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-12 gap-2 bg-card/50 rounded-2xl border-none group"
              >
                <h2 className="font-bold text-xl text-center">{item.title}</h2>
                <p className="text-muted-foreground text-center">
                  Addressing hunger and maluntrition by providing nutritious
                  meals
                </p>

                <div className="bg-accent w-4/6 mx-auto rounded-full aspect-square overflow-hidden mt-4">
                  <Image
                    src={female_teacher}
                    alt="female logo"
                    className="group-hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="flex justify-center mt-4">
                  <button className="rounded-full flex items-center gap-2 group font-semibold transition duration-300 w-fit hover:text-gray-700 text-lg text-primary cursor-pointer z-10">
                    Read More
                    <LucideArrowRightCircle className="size-5 transform group-hover:translate-x-1 transition duration-300" />
                  </button>
                </div>
              </Card>
            ))}
            <div className="absolute grid grid-cols-4 gap-x-3 -bottom-30 -left-24">
              {["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"].map(
                (item, index) => (
                  <span key={index} className="text-primary text-xl">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div className=" mt-16 w-full flex justify-center gap-2">
            <span className="text-muted-foreground text-center">
              You will be satisfy with our work. Contact us today{" "}
            </span>{" "}
            <Link
              href={"/"}
              className="underline-offset-4 underline font-semibold text-primary hover:text-gray-700"
            >
              (+91) 123 456 789
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase text-xl shrink-0 font-semibold font-mono tracking-widest">
                  What we do
                </h3>
              </div>

              <h1 className="font-semibold text-5xl mt-4 tracking-normal">
                Building hope creating lasting change
              </h1>
            </div>

            <div className="relative">
              <div className="w-4/6 ml-auto bg-blue-800 rounded-2xl h-[650px]"></div>
              <div className="absolute w-[280px] bg-blue-50 aspect-square rounded-full bottom-12 left-10 p-1.5 overflow-hidden">
                <div className="bg-slate-700 h-full w-full rounded-full"></div>
              </div>

              <div className="absolute top-24 left-4">
                <button className="px-6 py-4 -rotate-90 rounded-2xl flex items-center gap-2 group font-semibold transition duration-300 w-fit bg-primary hover:bg-blue-800 text-white cursor-pointer z-10">
                  {" "}
                  <HandCoinsIcon className="size-6" /> Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
