"use client";

import { LucideArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import new_logo from "@/images/new_small_logo.png";
import whatwedo1 from "@/images/ibra-lycbo.jpg";
import {
  buttonVariants,
  cardVariants,
  containerVariants,
  itemVariants,
  logoVariants,
} from "@/lib/constants";
import Link from "next/link";

const LatestPost = () => {
  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: [0.42, 0.0, 0.58, 1] as const, // ease-in-out
      },
    },
  };

  return (
    <section className="bg-gradient-to-b to-accent/70 from-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto py-24 w-full px-4">
        {/* Header Section with Motion Animation */}
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
            <motion.div variants={logoVariants} whileHover="hover">
              <Image
                src={new_logo}
                alt="logo"
                className="size-6 cursor-pointer"
              />
            </motion.div>
            <motion.h3
              className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide"
              variants={itemVariants}
            >
              Latest Post
            </motion.h3>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
            variants={itemVariants}
          >
            Stories of impact and hope
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-8 text-center text-sm lg:text-base"
            variants={itemVariants}
          >
            Explore inspiring stories and updates about our initiatives,
            successes, and the lives we've touched. <br /> See how your support
            is creating real, lasting change in communities worldwide.
          </motion.p>
        </motion.div>

        {/* Cards Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: "Empowering Communities through Education" },
            { title: "Protect forests, Futures Our Environmental Mission" },
            { title: "Partnering for Collaborative Impact Stories" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex-1 w-full rounded-2xl bg-white/50 shadow px-10 py-10 overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2
                className="text-primary font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                Jan 2, 2025
              </motion.h2>

              <motion.h1
                className="mt-2 text-xl font-bold line-clamp-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {item.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="relative h-64 rounded-xl mt-4 group overflow-hidden"
              >
                <Image
                  src={whatwedo1}
                  alt="post-image"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine-effect" />
                </div>
              </motion.div>

              <motion.div
                className="flex mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  className="rounded-full flex items-center gap-1 group font-bold transition duration-300 w-fit hover:text-gray-700 tracking-tight text-primary cursor-pointer z-10"
                  href={`/blog/${item.title.split(" ")[0]}`}
                >
                  Read More
                  <motion.div variants={arrowVariants}>
                    <LucideArrowRightCircle className="size-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestPost;
