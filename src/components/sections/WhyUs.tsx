// import { CheckCircle } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// import new_logo from "@/images/new_small_logo.png";

// const WhyUs = () => {
//   return (
//     <section className="bg-blue-50">
//       <div className="max-w-7xl mx-auto py-24 w-full px-4 lg:px-0">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="w-full aspect-square relative overflow-hidden rounded-2xl flex justify-start items-center">
//             <div className="bg-blue-800 w-11/12 aspect-square rounded-full"></div>

//             <div className="bg-blue-50 p-1 absolute w-5/12 bottom-0 right-0 aspect-square rounded-full">
//               <div className="bg-gray-400 w-full h-full rounded-full"></div>
//             </div>
//           </div>

//           <div className="bg-blue-50/50 px-2 py-10 overflow-hidden aspect-square rounded-xl">
//             <div className="flex items-center gap-4 w-full">
//               <Image src={new_logo} alt="logo" className="size-6" />
//               <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide">
//                 Why Choose Us
//               </h3>
//             </div>

//             <div className="h-full mt-4 flex flex-col">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//                 Why we stand out together
//               </h1>
//               <p className="mt-4 xl:mt-6 text-muted-foreground text-sm lg:text-base">
//                 Our dedication, transparency, and community-driven approach set
//                 us apart. partnering with us,programs that create meaningful
//                 change.
//               </p>

//               <div className="flex mt-16 flex-col">
//                 <div className="flex gap-6 font-semibold flex-col lg:flex-row">
//                   <div className="flex items-center gap-2">
//                     <div className="relative">
//                       <CheckCircle className="size-10" />
//                       <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
//                     </div>
//                     <span className="ml-2">Community-Centered Approach</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="relative">
//                       <CheckCircle className="size-10" />
//                       <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
//                     </div>
//                     <span className="ml-2">
//                       Transparency and Accountability
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex gap-6 font-semibold mt-8">
//                   <div className="flex items-center gap-2">
//                     <div className="relative">
//                       <CheckCircle className="size-10" />
//                       <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
//                     </div>
//                     <span className="ml-2">Community-Centered Approach</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="relative">
//                       <CheckCircle className="size-10" />
//                       <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square " />
//                     </div>
//                     <span className="ml-2">Volunteer and Donor Engagement</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between mt-16">
//                 <div className="flex flex-col items-center border-r pr-8">
//                   <h1 className="font-extrabold text-5xl mb-3 text-primary">
//                     11+
//                   </h1>
//                   <h2 className="font-semibold">Years of Experience</h2>
//                 </div>
//                 <div className="flex flex-col items-center border-r pr-8">
//                   <h1 className="font-extrabold text-5xl mb-3 text-primary">
//                     40+
//                   </h1>
//                   <h2 className="font-semibold"> Volunteers</h2>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <h1 className="font-extrabold text-5xl mb-3 text-primary">
//                     8+
//                   </h1>
//                   <h2 className="font-semibold">Country Wide Office</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;

"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import new_logo from "@/images/new_small_logo.png";
import { containerVariants, itemVariants } from "@/lib/constants";

const WhyUs = () => {
  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const scaleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const checkmarkVariants = {
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

  const countUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto py-24 w-full px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="w-full aspect-square relative overflow-hidden rounded-2xl flex justify-start items-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-blue-800 w-11/12 aspect-square rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: true }}
            />

            <motion.div
              className="bg-blue-50 p-1 absolute w-5/12 bottom-0 right-0 aspect-square rounded-full"
              initial={{ scale: 0, x: 50, y: 50 }}
              whileInView={{ scale: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.8,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gray-400 w-full h-full rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 1.2,
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-blue-50/50 px-2 py-10 overflow-hidden aspect-square rounded-xl"
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
                Why Choose Us
              </motion.h3>
            </motion.div>

            <div className="h-full mt-4 flex flex-col">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Why we stand out together
              </motion.h1>

              <motion.p
                className="mt-4 xl:mt-6 text-muted-foreground text-sm lg:text-base"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our dedication, transparency, and community-driven approach set
                us apart. partnering with us,programs that create meaningful
                change.
              </motion.p>

              <motion.div
                className="flex mt-16 flex-col"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex gap-6 font-semibold flex-col lg:flex-row">
                  {[
                    "Community-Centered Approach",
                    "Transparency and Accountability",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="relative">
                        <motion.div
                          variants={checkmarkVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <CheckCircle className="size-10" />
                        </motion.div>
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.2,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="ml-2">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-6 font-semibold mt-8">
                  {[
                    "Community-Centered Approach",
                    "Volunteer and Donor Engagement",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="relative">
                        <motion.div
                          variants={checkmarkVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <CheckCircle className="size-10" />
                        </motion.div>
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 -bottom-1 bg-primary/60 w-7 rounded-full aspect-square"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 1.2 + index * 0.2,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="ml-2">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex justify-between mt-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  { number: "11+", label: "Years of Experience" },
                  { number: "40+", label: "Volunteers" },
                  { number: "8+", label: "Country Wide Office" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center ${
                      index < 2 ? "border-r pr-8" : ""
                    }`}
                    variants={countUpVariants}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.h1
                      className="font-extrabold text-5xl mb-3 text-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {stat.number}
                    </motion.h1>
                    <motion.h2
                      className="font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.h2>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
