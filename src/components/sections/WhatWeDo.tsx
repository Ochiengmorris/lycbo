"use client";

import { HandCoinsIcon, LucideDroplets, LucideHouse } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import new_logo from "@/images/new_small_logo.png";
import whatwedo1 from "@/images/FxmUtvGWcAEpkeQ.jpg";
import whatwedo2 from "@/images/lycbo-img2.jpg";
import {
  containerVariants,
  floatingAnimation,
  imageVariants,
  itemVariants,
} from "@/lib/constants";

const WhatWeDo = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto py-24 w-full px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={new_logo} alt="logo" className="size-6" />
              </motion.div>
              <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide">
                What we do
              </h3>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Building hope creating lasting change
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-14 flex flex-col">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 mb-7"
              >
                <div className="relative">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <HandCoinsIcon className="size-20" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-8 lg:bottom-0 bg-primary/60 w-10 rounded-full aspect-square"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">
                    Economic Empowerement
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm lg:text-base">
                    Empowering individuals through job training, financial
                    literacy, and small business support to create sustainable
                    livelihoods.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 py-7 border-y"
              >
                <div className="relative">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <LucideDroplets className="size-20" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-8 lg:bottom-0 bg-primary/60 w-10 rounded-full aspect-square"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">
                    Clean Water and Sanitation
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm lg:text-base">
                    Empowering individuals through job training, financial
                    literacy, and small business support to create sustainable
                    livelihoods.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 pt-7"
              >
                <div className="relative">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <LucideHouse className="size-20" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-14 lg:bottom-0 bg-primary/60 w-10 rounded-full aspect-square"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">
                    Housing and Shelter Initiatives
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm lg:text-base">
                    Empowering individuals through job training, financial
                    literacy, and small business support to create sustainable
                    livelihoods.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="relative mt-12 lg:mt-0"
          >
            <motion.div
              variants={imageVariants}
              className="lg:w-4/6 w-10/12 group relative ml-auto bg-blue-800 rounded-2xl overflow-hidden lg:h-[650px] h-[500px]"
            >
              <motion.div className="w-full h-full">
                <Image
                  src={whatwedo1}
                  alt="what-we-do"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="shine-effect" />
              </div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              animate={floatingAnimation}
              className="absolute lg:w-[280px] w-[150px] bg-blue-50 aspect-square rounded-full bottom-12 lg:left-10 -left-2 p-1.5 overflow-hidden"
            >
              <motion.div className="bg-slate-700 relative group h-full w-full rounded-full">
                <Image
                  src={whatwedo2}
                  alt="what-we-do"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute top-24 lg:left-4 -left-16"
            >
              <motion.button
                whileHover={{
                  backgroundColor: "#1e40af",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 -rotate-90 rounded-2xl flex items-center gap-2 group font-semibold transition duration-300 w-fit bg-primary hover:bg-blue-800 text-white cursor-pointer z-10"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <HandCoinsIcon className="size-6 mr-2" />
                </motion.div>
                Donate Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
