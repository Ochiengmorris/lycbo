"use client";

import { LucideArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import female_teacher from "@/images/FxmUtvGWcAEpkeQ.jpg";
import new_logo from "@/images/new_small_logo.png";
import {
  buttonVariants,
  cardVariants,
  containerVariants,
  decorativeVariants,
  imageVariants,
  itemVariants,
  logoVariants,
  xVariants,
} from "@/lib/constants";

const Services = () => {
  return (
    <section className="bg-accent/70">
      <div className="max-w-7xl mx-auto py-24 w-full px-4">
        <motion.div
          className="flex items-center flex-col px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <motion.div variants={logoVariants}>
              <Image src={new_logo} alt="logo" className="size-6" />
            </motion.div>
            <motion.h3
              className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide"
              variants={itemVariants}
            >
              Services
            </motion.h3>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
            variants={itemVariants}
          >
            Our comprehensive services
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-8 text-center text-sm"
            variants={itemVariants}
          >
            Our services are focused on creating lasting change through
            community development, healthcare <br /> access, educational
            support, and emergency relief.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 lg:grid-cols-3 gap-8 mt-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: "Educational Support" },
            { title: "Healthcare Access" },
            { title: "Food Security Initiative" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="perspective-1000"
            >
              <Card className="p-12 gap-2 bg-card/50 rounded-2xl border-none">
                <motion.h2
                  className="font-bold text-xl text-center"
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-muted-foreground text-center"
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  Addressing hunger and maluntrition by providing nutritious
                  meals
                </motion.p>

                <motion.div
                  className="bg-accent relative w-4/6 mx-auto rounded-full aspect-square overflow-hidden group mt-4"
                  // initial={{ opacity: 0, scale: 0.8 }}
                  // whileInView={{ opacity: 1, scale: 1 }}
                  // transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  <motion.div variants={imageVariants}>
                    <Image
                      src={female_teacher}
                      alt="female logo"
                      className="transition duration-300"
                    />
                  </motion.div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="shine-effect" />
                  </div>
                </motion.div>

                <motion.div
                  className="flex justify-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="rounded-full flex items-center gap-1 group font-semibold transition duration-300 w-fit hover:text-gray-700 text-lg text-primary cursor-pointer z-10"
                    variants={buttonVariants}
                  >
                    Read More
                    <motion.div className="transform group-hover:translate-x-1 transition duration-300">
                      <LucideArrowRightCircle className="size-5" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </Card>
            </motion.div>
          ))}

          <motion.div
            className="absolute grid grid-cols-4 gap-x-3 -bottom-30 -left-24"
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
                    scale: 1.2,
                    rotate: 180,
                    color: "#6366f1",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 w-full flex flex-col lg:flex-row px-4 lg:px-0 text-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-muted-foreground text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            You will be satisfied with our work. Contact us today{" "}
          </motion.span>{" "}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Link
              href={"/"}
              className="underline-offset-4 underline font-semibold text-primary hover:text-gray-700"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                (+254) 746 687 512
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
