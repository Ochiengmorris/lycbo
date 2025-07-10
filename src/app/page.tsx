import HeaderNav from "@/components/HeaderNav";
import LandingBanner from "@/components/LandingBanner ";
import Image from "next/image";
import female_teacher from "@/images/FxmUtvGWcAEpkeQ.jpg";
import new_logo from "@/images/new_small_logo.png";
import whatwedo1 from "@/images/what-we-do-image-1.jpg";
import whatwedo2 from "@/images/what-we-do-image-2.jpg";
import homeless1 from "@/images/homeless2.jpg";
import {
  ArrowRightCircle,
  CheckCircle,
  GraduationCap,
  HandCoinsIcon,
  HeartPulse,
  LucideArrowRightCircle,
  LucideDroplets,
  LucideHouse,
  ShoppingBag,
  TriangleAlert,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import InfinteTextSlider from "@/components/InfinteTextSlider";
import DonationModal from "@/components/DonationModal";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <LandingBanner />

      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 xl:px-16 w-full relative">
            <div className="absolute hidden xl:grid grid-cols-4 gap-x-3 -top-16 -right-24">
              {["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"].map(
                (item, index) => (
                  <span key={index} className="text-primary text-xl">
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="aspect-square overflow-hidden flex flex-col relative gap-2 rounded-xl">
              <div className="w-3/4 rounded-2xl place-self-end pb-2 aspect-square">
                <div className="w-full relative h-full bg-amber-300 rounded-2xl overflow-hidden">
                  <Image
                    src={whatwedo2}
                    alt="what-we-do"
                    className="w-full h-full group-hover:"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="shine-effect" />
                  </div>
                </div>
              </div>
              {/* <div className="bg-amber-700 z-10 w-full h-full rounded-2xl justify-self-end place-self-end"></div> */}
              <div className="absolute -bottom-2 rounded-2xl bg-blue-50 -left-2 w-8/12 aspect-square p-2">
                <div className="bg-black relative rounded-2xl overflow-hidden w-full h-full">
                  <Image
                    src={whatwedo1}
                    alt="what-we-do"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="shine-effect" />
                  </div>
                </div>
              </div>
            </div>

            <div className=" gap-0 bg-blue-50/50 px-6 py-10 overflow-hidden aspect-square rounded-xl">
              <div className="flex items-center gap-4 w-full">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase shrink-0 text-xl font-mono tracking-wide">
                  About us
                </h3>
              </div>

              <div className="h-full mt-4">
                <h1 className=" text-4xl xl:text-5xl font-bold">
                  Our journey of compassion and hope
                </h1>
                <p className="mt-4 xl:mt-6 text-muted-foreground">
                  LYCBO is an established Youth Empowerment Center with seven
                  (7) registered nascent youth and women-led groups located on
                  the south coast of Kwale County, Lungalunga.
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
      </section>

      <section className="bg-accent/70">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Image src={new_logo} alt="logo" className="size-6" />
              <h3 className="uppercase text-xl shrink-0 font-semibold font-mono tracking-wide">
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
                className="p-12 gap-2 bg-card/50 rounded-2xl border-none"
              >
                <h2 className="font-bold text-xl text-center">{item.title}</h2>
                <p className="text-muted-foreground text-center">
                  Addressing hunger and maluntrition by providing nutritious
                  meals
                </p>

                <div className="bg-accent relative w-4/6 mx-auto rounded-full aspect-square overflow-hidden group mt-4">
                  <Image
                    src={female_teacher}
                    alt="female logo"
                    className="group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="shine-effect" />
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="rounded-full flex items-center gap-1 group font-semibold transition duration-300 w-fit hover:text-gray-700 text-lg text-primary cursor-pointer z-10">
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
              You will be satisfied with our work. Contact us today{" "}
            </span>{" "}
            <Link
              href={"/"}
              className="underline-offset-4 underline font-semibold text-primary hover:text-gray-700"
            >
              (+254) 746 687 512
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase text-xl shrink-0 font-mono tracking-wide">
                  What we do
                </h3>
              </div>

              <h1 className="font-semibold text-5xl mt-4 tracking-normal">
                Building hope creating lasting change
              </h1>

              <div className="mt-14 flex flex-col">
                <div className="flex gap-6 mb-7">
                  <div className="relative">
                    <HandCoinsIcon className="size-20" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-primary/60 w-10 rounded-full aspect-square " />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      Economic Empowerement
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Empowering individuals through job training, financial
                      literacy, and small business support to create sustainable
                      livelihoods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 py-7 border-y">
                  <div className="relative">
                    <LucideDroplets className="size-20" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-primary/60 w-10 rounded-full aspect-square " />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      Clean Water and Sanitation
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Empowering individuals through job training, financial
                      literacy, and small business support to create sustainable
                      livelihoods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 pt-7">
                  <div className="relative">
                    <LucideHouse className="size-20" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-primary/60 w-10 rounded-full aspect-square " />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      Housing and Shelter Initiatives
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Empowering individuals through job training, financial
                      literacy, and small business support to create sustainable
                      livelihoods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-4/6 ml-auto bg-blue-800 rounded-2xl overflow-hidden h-[650px]">
                <Image
                  src={whatwedo1}
                  alt="what-we-do"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute w-[280px] bg-blue-50 aspect-square rounded-full bottom-12 left-10 p-1.5 overflow-hidden">
                <div className="bg-slate-700 h-full w-full rounded-full">
                  <Image
                    src={whatwedo2}
                    alt="what-we-do"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>

              <div className="absolute top-24 left-4">
                <button className="px-6 py-4 -rotate-90 rounded-2xl flex items-center gap-2 group font-semibold transition duration-300 w-fit bg-primary hover:bg-blue-800 text-white cursor-pointer z-10">
                  {" "}
                  <HandCoinsIcon className="size-6 mr-2" /> Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/70">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Image src={new_logo} alt="logo" className="size-6" />
              <h3 className="uppercase text-xl shrink-0 font-semibold font-mono tracking-wide">
                Our Causes
              </h3>
            </div>

            <h1 className="font-semibold text-5xl mt-4">
              Supporting communities causes
            </h1>
            <p className="text-muted-foreground mt-8 text-center">
              We focus on impactful causes that address urgent community needs,
              from healthcare and education <br /> to food security and for
              lasting change.
            </p>
          </div>

          <div className="grid grid-cols-3 mt-20 gap-8 relative">
            <div className="absolute grid grid-cols-4 gap-x-3 bottom-5 -left-10">
              {["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"].map(
                (item, index) => (
                  <span key={index} className="text-primary font-bold text-xl">
                    {item}
                  </span>
                )
              )}
            </div>

            <Card className="p-4 border group rounded-xl bg-card/50 gap-0 border-none z-10">
              <div className=" relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={whatwedo1}
                  alt="what-we-do"
                  className="w-full h-full group-hover:scale-105 transition duration-300 object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
              <h2 className="text-center mt-4 font-semibold text-2xl">
                Healthcare access
              </h2>
              <p className="text-center">
                Ensuring education and resouces for undeserved communities.
              </p>

              <button className="rounded-full flex justify-center mt-8 py-4 items-center gap-2 group font-semibold transition duration-300 w-full hover:bg-primary bg-primary/90 text-lg text-white cursor-pointer z-10">
                Donate Now
              </button>
            </Card>

            <Card className="p-4 border group rounded-xl bg-card/50 gap-0 border-none">
              <div className="w-full relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={whatwedo1}
                  alt="what-we-do"
                  className="w-full h-full group-hover:scale-105 transition duration-300 object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
              <h2 className="text-center mt-4 font-semibold text-2xl">
                Healthcare access
              </h2>
              <p className="text-center">
                Ensuring education and resouces for undeserved communities.
              </p>

              <button className="rounded-full flex justify-center mt-8 py-4 items-center gap-2 group font-semibold transition duration-300 w-full hover:bg-primary bg-primary/90 text-lg text-white cursor-pointer z-10">
                Donate Now
              </button>
            </Card>
            <Card className="p-4 border group rounded-xl bg-card/50 gap-0 border-none">
              <div className="w-full relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={whatwedo1}
                  alt="what-we-do"
                  className="w-full h-full group-hover:scale-105 transition duration-300 object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
              <h2 className="text-center mt-4 font-semibold text-2xl">
                Healthcare access
              </h2>
              <p className="text-center">
                Ensuring education and resouces for undeserved communities.
              </p>

              <button className="rounded-full flex justify-center mt-8 py-4 items-center gap-2 group font-semibold transition duration-300 w-full hover:bg-primary bg-primary/90 text-lg text-white cursor-pointer z-10">
                Donate Now
              </button>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="grid grid-cols-2 gap-8">
            <div className="w-full aspect-square relative overflow-hidden rounded-2xl flex justify-start items-center">
              <div className="bg-blue-800 w-11/12 aspect-square rounded-full"></div>

              <div className="bg-blue-50 p-1 absolute w-5/12 bottom-0 right-0 aspect-square rounded-full">
                <div className="bg-gray-400 w-full h-full rounded-full"></div>
              </div>
            </div>

            <div className="bg-blue-50/50 px-2 py-10 overflow-hidden aspect-square rounded-xl">
              <div className="flex items-center gap-4 w-full">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase shrink-0 text-xl font-mono tracking-wide">
                  Why Choose Us
                </h3>
              </div>

              <div className="h-full mt-4 flex flex-col">
                <h1 className=" text-4xl xl:text-5xl font-bold">
                  Why we stand out together
                </h1>
                <p className="mt-4 xl:mt-6 text-muted-foreground">
                  Our dedication, transparency, and community-driven approach
                  set us apart. partnering with us,programs that create
                  meaningful change.
                </p>

                <div className="flex mt-16 flex-col">
                  <div className="flex gap-6 font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <CheckCircle className="size-10" />
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
                      </div>
                      <span className="ml-2">Community-Centered Approach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <CheckCircle className="size-10" />
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
                      </div>
                      <span className="ml-2">
                        Transparency and Accountability
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 font-semibold mt-8">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <CheckCircle className="size-10" />
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
                      </div>
                      <span className="ml-2">Community-Centered Approach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <CheckCircle className="size-10" />
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
                      </div>
                      <span className="ml-2">
                        Volunteer and Donor Engagement
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-16">
                  <div className="flex flex-col items-center border-r pr-8">
                    <h1 className="font-extrabold text-5xl mb-3 text-primary">
                      11+
                    </h1>
                    <h2 className="font-semibold">Years of Experience</h2>
                  </div>
                  <div className="flex flex-col items-center border-r pr-8">
                    <h1 className="font-extrabold text-5xl mb-3 text-primary">
                      40+
                    </h1>
                    <h2 className="font-semibold"> Volunteers</h2>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="font-extrabold text-5xl mb-3 text-primary">
                      8+
                    </h1>
                    <h2 className="font-semibold">Country Wide Office</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-accent/70 to-blue-50">
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Image src={new_logo} alt="logo" className="size-6" />
              <h3 className="uppercase text-xl shrink-0 font-mono tracking-wide">
                OUR IMPACT
              </h3>
            </div>

            <h1 className="font-semibold text-5xl mt-4">
              Highlights our impactful work
            </h1>
            <p className="text-muted-foreground mt-8 text-center">
              Discover the positive change we’ve created through our programs,
              partnerships, and dedicated efforts. <br /> From healthcare and
              education to environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-3 px-16 mt-20 gap-12">
            <div>
              <div className="aspect-square overflow-hidden flex flex-col relative rounded-xl">
                <Image
                  src={whatwedo2}
                  alt="image"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="mt-10 flex justify-between gap-4">
                <div>
                  <h1 className="text-5xl font-bold text-primary mb-4">96%</h1>
                  <h2 className="font-semibold text-xl">Healthcare Support</h2>
                  <p className="text-muted-foreground mt-2">
                    Providing essential healthcare services and resources to
                    communities.
                  </p>
                </div>
                <div className="relative">
                  <HeartPulse className="size-16" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square " />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10 flex justify-between gap-4">
                <div>
                  <h1 className="text-5xl font-bold text-primary mb-4">94%</h1>
                  <h2 className="font-semibold text-xl">Education Support</h2>
                  <p className="text-muted-foreground mt-2">
                    Providing essential Education services and resources to
                    communities.
                  </p>
                </div>
                <div className="relative">
                  <GraduationCap className="size-16" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square " />
                </div>
              </div>
              <div className="aspect-square overflow-hidden flex flex-col relative rounded-xl">
                <Image
                  src={whatwedo2}
                  alt="image"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="aspect-square overflow-hidden flex flex-col relative rounded-xl">
                <Image
                  src={whatwedo2}
                  alt="image"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="mt-10 flex justify-between gap-4">
                <div>
                  <h1 className="text-5xl font-bold text-primary mb-4">95%</h1>
                  <h2 className="font-semibold text-xl">Food Support</h2>
                  <p className="text-muted-foreground mt-2">
                    Providing essential Food services and resources to
                    communities.
                  </p>
                </div>
                <div className="relative">
                  <ShoppingBag className="size-16" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 pb-20">
        <div className="w-full">
          <InfinteTextSlider />
        </div>
      </div>

      <section
        className="bg-accent/70"
        style={{
          backgroundImage: `url(${homeless1.src || homeless1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto py-24 w-full">
          <div className="flex px-4 gap-12 my-16">
            <div className="flex-1"></div>
            <div className="flex-1 w-full rounded-2xl gap-0 bg-blue-50 px-10 py-10 overflow-hidden">
              <div className="flex items-center gap-4 w-full">
                <Image src={new_logo} alt="logo" className="size-6" />
                <h3 className="uppercase shrink-0 text-xl font-mono tracking-wide">
                  Donate Now
                </h3>
              </div>
              <h1 className="mt-4 text-4xl xl:text-5xl font-bold">
                Donate to us
              </h1>
              <p className="mt-4 xl:mt-6 text-muted-foreground">
                Your generous support enables us to continue the mission of
                spreading God’s love and serving our community.
              </p>
              <div className="mt-4 bg-blue-200/30 relative px-10 py-6 border-l-4 border-blue-500">
                <h2>
                  <b>Notice:</b> Test mode is enabled. While in test mode, no
                  live donations will be processed.
                </h2>

                <div className="absolute bg-blue-500 rounded-full flex p-2 top-1/2 -translate-y-1/2 -left-5">
                  <TriangleAlert className="size-5 text-white" />
                </div>
              </div>

              <DonationModal />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
