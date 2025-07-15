"use client";

import React from "react";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import new_logo from "@/images/new_small_logo.png";
import whatwedo2 from "@/images/AboutUs1.jpg";
import whatwedo1 from "@/images/female-members.jpg";
import female_teacher from "@/images/FxmUtvGWcAEpkeQ.jpg";
import {
  buttonVariants,
  containerVariants,
  countUpVariants,
  decorativeVariants,
  imageVariants,
  itemVariants,
  logoVariants,
  overlayImageVariants,
  statsVariants,
  xVariants,
} from "@/lib/constants";

const AboutUs = () => {
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-16 w-full relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative X pattern */}
          <motion.div
            className="absolute hidden xl:grid grid-cols-4 gap-x-3 -top-16 -right-24"
            variants={decorativeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"].map(
              (item, index) => (
                <motion.span
                  key={index}
                  className="text-primary text-xl"
                  variants={xVariants}
                  whileHover={{
                    scale: 1.5,
                    rotate: 180,
                    transition: { duration: 0.3 },
                  }}
                >
                  {item}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="aspect-square overflow-hidden flex flex-col relative gap-2 rounded-xl"
            // variants={itemVariants}
          >
            <motion.div
              className="w-3/4 rounded-2xl place-self-end pb-2 aspect-square"
              variants={imageVariants}
            >
              <div className="w-full relative h-full group bg-amber-300 rounded-2xl overflow-hidden">
                <Image
                  src={whatwedo2}
                  alt="what-we-do"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 group rounded-2xl bg-blue-50 -left-2 w-8/12 aspect-square p-2"
              variants={imageVariants}
            >
              <div className="bg-black relative rounded-2xl overflow-hidden w-full h-full">
                <Image
                  src={whatwedo1}
                  alt="what-we-do"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="gap-0 bg-blue-50/50 px-6 py-4 overflow-hidden rounded-xl"
            // variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-4 w-full"
              variants={itemVariants}
            >
              <motion.div variants={logoVariants}>
                <Image src={new_logo} alt="logo" className="size-6" />
              </motion.div>
              <motion.h3
                className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide"
                variants={itemVariants}
              >
                About us
              </motion.h3>
            </motion.div>

            <div className="h-full mt-4">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold "
                // variants={itemVariants}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our journey of
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  compassion
                </motion.span>
                <span className="mx-4">and</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  hope
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-4 xl:mt-6 text-muted-foreground text-sm lg:text-base"
                variants={itemVariants}
              >
                LYCBO is an established Youth Empowerment Center with seven (7)
                registered nascent youth and women-led groups located on the
                south coast of Kwale County, Lungalunga.
              </motion.p>

              <motion.div className="flex mt-8 grow" variants={itemVariants}>
                <div className="w-5/8 justify-between flex flex-col">
                  <motion.div
                    className="flex flex-col items-start w-full gap-4"
                    variants={itemVariants}
                  >
                    <motion.div variants={logoVariants}>
                      <Image src={new_logo} alt="logo" className="size-8" />
                    </motion.div>
                    <motion.h3
                      className="uppercase shrink-0 font-semibold"
                      variants={itemVariants}
                    >
                      HealthCare Support
                    </motion.h3>
                    <motion.p
                      className="text-sm text-muted-foreground"
                      variants={itemVariants}
                    >
                      Providing essential healthcare services and resources to
                      communities
                    </motion.p>
                  </motion.div>

                  <motion.button
                    className="px-6 py-4 mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-2 group font-semibold transition duration-300 w-fit text-sm lg:text-base hover:bg-blue-800 text-white cursor-pointer z-10"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.span>About Us</motion.span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                      }}
                    >
                      <ArrowRightCircle className="size-5" />
                    </motion.div>
                  </motion.button>
                </div>

                <motion.div
                  className="flex-1 hidden lg:block bg-gray-300 rounded-2xl p-4 w-full"
                  variants={statsVariants}
                >
                  <motion.div
                    className="bg-accent w-2/4 mx-auto rounded-full aspect-square overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image src={female_teacher} alt="female logo" />
                  </motion.div>
                  <motion.div
                    className="mt-4 text-center"
                    variants={itemVariants}
                  >
                    <motion.h3
                      className="text-xl text-primary"
                      variants={countUpVariants}
                      whileInView={{
                        scale: [1, 1.2, 1],
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                      viewport={{ once: true }}
                    >
                      75,958
                    </motion.h3>
                    <motion.h2
                      className="font-bold mt-2"
                      variants={itemVariants}
                    >
                      Helper Fund
                    </motion.h2>
                    <motion.p
                      className="text-muted-foreground mt-2 text-xs"
                      variants={itemVariants}
                    >
                      Supporting growth through community- funding.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
