"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import new_logo from "@/images/new_small_logo.png";
import whatwedo1 from "@/images/what-we-do-image-1.jpg";
import {
  cardVariants,
  containerVariants,
  decorativeVariants,
  itemVariants,
} from "@/lib/constants";

const OurCauses = () => {
  return (
    <section className="bg-accent/70">
      <div className="max-w-7xl mx-auto py-24 w-full px-4">
        <motion.div
          className="flex items-center flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={new_logo} alt="logo" className="size-6" />
            </motion.div>
            <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide">
              Our Causes
            </h3>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center"
            variants={itemVariants}
          >
            Supporting communities causes
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-8 text-center text-sm"
            variants={itemVariants}
          >
            We focus on impactful causes that address urgent community needs,
            from healthcare and education <br /> to food security and for
            lasting change.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 mt-20 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="absolute grid grid-cols-2 gap-x-3 bottom-5 -left-11"
            variants={decorativeVariants}
          >
            {["x", "x", "x", "x", "x", "x"].map((item, index) => (
              <motion.span
                key={index}
                className="text-primary font-bold text-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.05,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {[1, 2, 3].map((cardIndex) => (
            <motion.div key={cardIndex} variants={cardVariants}>
              <Card className="p-4 border group rounded-xl bg-card/50 gap-0 border-none z-10">
                <motion.div
                  className="relative w-full aspect-square rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={whatwedo1}
                    alt="what-we-do"
                    className="w-full h-full group-hover:scale-105 transition duration-300 object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="shine-effect" />
                  </div>
                </motion.div>

                <motion.h2
                  className="text-center mt-4 font-semibold text-lg lg:text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Healthcare access
                </motion.h2>

                <motion.p
                  className="text-center text-sm lg:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ensuring education and resouces for undeserved communities.
                </motion.p>

                <motion.button className="rounded-full flex justify-center mt-8 py-3 lg:py-4 items-center gap-2 group font-semibold transition duration-300 w-full hover:bg-primary bg-primary/90 lg:text-lg text-white cursor-pointer z-10">
                  Donate Now
                </motion.button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCauses;
