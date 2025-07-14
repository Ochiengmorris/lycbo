"use client";
import React from "react";
import Image from "next/image";
import new_logo from "@/images/new_small_logo.png";
import eu from "@/images/partners/EUKENYA-removebg-preview.png";
import yach from "@/images/partners/Yach-Kwale__1.png";
import weworld from "@/images/partners/WeWorld1.png";
import doh from "@/images/partners/KwaleCounty1.png";
import german from "@/images/partners/germanlogo1.png";
import hewlett from "@/images/partners/Hewlett-Foundation-Logo (1).jpg";
import dsw from "@/images/partners/DSW.png";

const Partners = () => {
  // Sample partner logos - replace with your actual partner logos
  const partnerLogos = [
    { id: 1, src: eu, alt: "Partner 1", name: "EU in Kenya" },
    { id: 2, src: yach, alt: "Partner 2", name: "YACH Kwale" },
    { id: 3, src: hewlett, alt: "Partner 3", name: "Hewlett Foundation" },
    { id: 5, src: weworld, alt: "Partner 5", name: "WeWorld Global" },
    {
      id: 6,
      src: doh,
      alt: "Partner 6",
      name: "Department Of Health – Kwale County",
    },
    {
      id: 7,
      src: german,
      alt: "Partner 7",
      name: "German Foundation For World Population",
    },
    {
      id: 8,
      src: dsw,
      alt: "Partner 8",
      name: "Youth for a Sustainable World – YSW",
    },
  ];

  // Duplicate the logos for seamless looping
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-blue-50 overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scrolling-logos {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .scrolling-logos:hover {
          animation-play-state: paused;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-right: 4rem;
        }

        @media (max-width: 768px) {
          .logo-item {
            margin-right: 2rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto py-24 w-full px-4">
        <div className="flex items-center gap-4 mb-12">
          <div>
            <Image
              src={new_logo}
              alt="logo"
              className="size-6 cursor-pointer"
            />
          </div>
          <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide">
            Our Partners
          </h3>
        </div>

        {/* Logo carousel moving */}
        <div className="relative hidden md:block">
          {/* Gradient overlays for smooth fade effect */}

          {/* Moving carousel container */}
          <div className="flex overflow-hidden py-12 relative">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="scrolling-logos">
              {duplicatedLogos.map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="logo-item group">
                  <div className="relative transition-all duration-300 group-hover:scale-110">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        className="size-20 xl:size-36 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    {/* Partner name tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional: Static grid version for mobile */}
        <div className="block md:hidden mt-8">
          <div className="grid grid-cols-2 gap-8">
            {partnerLogos.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="size-24 object-contain opacity-90"
                  />
                </div>
                <span className="mt-2 text-xs font-semibold text-center text-muted-foreground">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
