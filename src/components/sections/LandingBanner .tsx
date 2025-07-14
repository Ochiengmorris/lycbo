"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import bannerImage from "@/images/staff-lycbo.jpg";
import new_logo from "@/images/new_small_logo.png";
import { ArrowRightCircle } from "lucide-react";
import { containerVariants, itemVariants, logoVariants } from "@/lib/constants";

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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] md:h-[955px] w-full overflow-hidden"
    >
      <motion.div
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
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 -z-10"
        // variants={overlayImageVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-4 mb-4 mt-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.div variants={logoVariants}>
            <Image src={new_logo} alt="logo" className="size-6" />
          </motion.div>
          <motion.h3
            className="uppercase tracking-wider text-sm lg:text-base "
            variants={itemVariants}
          >
            Welcome to our Organization
          </motion.h3>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 text-center md:text-start leading-tight"
          variants={titleVariants}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Nurturing,
          </motion.span>
          <br />
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, y: 20, color: "#ffffff" }}
            animate={{ opacity: 1, y: 0, color: "#6366f1" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Empowering
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {" "}
            and Transforming
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white/70 text-center md:text-start font-medium mb-10 max-w-3xl"
          variants={itemVariants}
        >
          Every little gesture of kindness generates a wave of positive impact.
          Come together with us to change lives for the better.
        </motion.p>

        <motion.button
          className="px-6 py-4 rounded-full self-center md:self-start flex items-center gap-2 group font-semibold transition duration-300 w-fit bg-primary hover:bg-blue-800 text-white cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span>Partner With Us</motion.span>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRightCircle className="size-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LandingBanner;
