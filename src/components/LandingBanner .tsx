"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import bannerImage from "@/images/staff-lycbo.jpg";
import new_logo from "@/images/new_small_logo.png";
import { ArrowRightCircle } from "lucide-react";

const LandingBanner = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;

      const scrolled = window.pageYOffset;
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (
        scrolled + windowHeight > sectionTop &&
        scrolled < sectionTop + sectionHeight
      ) {
        // Calculate parallax offset
        const parallaxSpeed = 0.2; // Adjust this value to control parallax intensity
        const yPos = (scrolled - sectionTop) * parallaxSpeed * 2; // positive to move image down

        // Apply transform to the image
        imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Add scroll event listener with throttling for better performance
    let ticking = false;
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScrollHandler, {
      passive: true,
    });

    // Initial call to set position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", optimizedScrollHandler);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[955px] w-full overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -z-20"
        style={{
          willChange: "transform",
        }}
      >
        <Image
          src={bannerImage}
          alt="Staff supporting children banner"
          fill
          priority
          className="object-cover w-full h-full"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <div className="flex items-center gap-4">
          <Image src={new_logo} alt="logo" className="size-6" />
          <h3 className="uppercase">Welcome to our Organization</h3>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          Nurturing, <br /> <span className="text-primary">Empowering</span> and
          Transforming
        </h1>

        <p className="text-lg md:text-2xl text-white/70 font-medium mb-10 max-w-3xl">
          Every little gesture of kindness generates a wave of positive impact.
          Come together with us to change lives for the better.
        </p>

        <button className="px-6 py-4 rounded-full flex items-center gap-2 group font-semibold transition duration-300 w-fit bg-primary hover:bg-blue-800 text-white cursor-pointer">
          Partner With Us
          <ArrowRightCircle className="size-5 transform group-hover:translate-x-1 transition duration-300" />
        </button>
      </div>
    </section>
  );
};

export default LandingBanner;
