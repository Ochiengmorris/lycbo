"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { TriangleAlert } from "lucide-react";
import new_logo from "@/images/new_small_logo.png";
import homeless1 from "@/images/homeless1.jpg"; // Assuming this import exists
import DonationModal from "../DonationModal";
import { containerVariants, itemVariants } from "@/lib/constants";

const DonationSection = () => {
  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const noticeVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.42, 0.0, 0.58, 1] as const, // ease-in-out
      },
    },
  };

  return (
    <motion.section
      className="bg-accent/70 relative overflow-hidden"
      style={{
        backgroundImage: `url(${homeless1.src || homeless1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // variants={backgroundVariants}
      animate="animate"
    >
      {/* Background overlay with subtle animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto py-24 w-full relative z-10">
        <div className="flex px-4 gap-12 my-16">
          <div className="flex-1 hidden lg:block"></div>

          <motion.div
            className="flex-1 w-full rounded-2xl gap-0 bg-blue-50 px-10 py-10 overflow-hidden"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-4 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={new_logo} alt="logo" className="size-6" />
              </motion.div>
              <motion.h3
                className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide"
                variants={itemVariants}
              >
                Donate Now
              </motion.h3>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Donate to us
            </motion.h1>

            <motion.p
              className="mt-4 xl:mt-6 text-muted-foreground text-sm lg:text-base"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Your generous support enables us to continue the mission of
              spreading God's love and serving our community.
            </motion.p>

            <motion.div
              className="mt-4 bg-blue-200/30 relative px-10 py-6 border-l-4 border-blue-500 text-sm lg:text-base text-blue-800"
              variants={noticeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <b>Notice:</b> Test mode is enabled. While in test mode, no live
                donations will be processed.
              </motion.h2>

              <motion.div
                className="absolute bg-blue-500 rounded-full flex p-2 top-1/2 -translate-y-1/2 -left-5"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                <motion.div variants={pulseVariants} animate="animate">
                  <TriangleAlert className="size-5 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <DonationModal />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DonationSection;
