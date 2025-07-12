// import { GraduationCap, HeartPulse, ShoppingBag } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// import new_logo from "@/images/new_small_logo.png";
// import whatwedo2 from "@/images/what-we-do-image-2.jpg";

// const OurImpact = () => {
//   return (
//     <section className="bg-gradient-to-b from-accent/70 to-blue-50">
//       <div className="max-w-7xl mx-auto py-24 w-full px-4 lg:px-0">
//         <div className="flex items-center flex-col">
//           <div className="flex items-center gap-4">
//             <Image src={new_logo} alt="logo" className="size-6" />
//             <h3 className="uppercase shrink-0 text-md lg:text-xl font-mono tracking-wide">
//               OUR IMPACT
//             </h3>
//           </div>

//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
//             Highlights our impactful work
//           </h1>
//           <p className="text-muted-foreground mt-8 text-center text-sm lg:text-base">
//             Discover the positive change we’ve created through our programs,
//             partnerships, and dedicated efforts. <br /> From healthcare and
//             education to environmental sustainability.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-16 mt-20 gap-12">
//           <div>
//             <div className="aspect-square overflow-hidden flex flex-col relative rounded-xl">
//               <Image
//                 src={whatwedo2}
//                 alt="image"
//                 className="object-cover w-full h-full"
//                 priority
//               />
//             </div>
//             <div className="mt-10 flex justify-between gap-4">
//               <div>
//                 <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
//                   96%
//                 </h1>
//                 <h2 className="font-semibold text-xl ">Healthcare Support</h2>
//                 <p className="text-muted-foreground mt-2 text-sm lg:text-base">
//                   Providing essential healthcare services and resources to
//                   communities.
//                 </p>
//               </div>
//               <div className="relative">
//                 <HeartPulse className="size-16" />
//                 <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square " />
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="mb-10 flex justify-between gap-4">
//               <div>
//                 <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
//                   94%
//                 </h1>
//                 <h2 className="font-semibold text-xl ">Education Support</h2>
//                 <p className="text-muted-foreground mt-2 text-sm lg:text-base">
//                   Providing essential Education services and resources to
//                   communities.
//                 </p>
//               </div>
//               <div className="relative">
//                 <GraduationCap className="size-16" />
//                 <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square " />
//               </div>
//             </div>
//             <div className="aspect-square overflow-hidden flex flex-col relative rounded-xl">
//               <Image
//                 src={whatwedo2}
//                 alt="image"
//                 className="object-cover w-full h-full"
//                 priority
//               />
//             </div>
//           </div>
//           <div>
//             <div className="aspect-square overflow-hidden flex flex-col relative rounded-xl">
//               <Image
//                 src={whatwedo2}
//                 alt="image"
//                 className="object-cover w-full h-full"
//                 priority
//               />
//             </div>
//             <div className="mt-10 flex justify-between gap-4">
//               <div>
//                 <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
//                   95%
//                 </h1>
//                 <h2 className="font-semibold text-xl ">Food Support</h2>
//                 <p className="text-muted-foreground mt-2 text-sm lg:text-base">
//                   Providing essential Food services and resources to
//                   communities.
//                 </p>
//               </div>
//               <div className="relative">
//                 <ShoppingBag className="size-16" />
//                 <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurImpact;

"use client";

import { GraduationCap, HeartPulse, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "motion/react";
import new_logo from "@/images/new_small_logo.png";
import whatwedo2 from "@/images/what-we-do-image-2.jpg";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  statsVariants,
} from "@/lib/constants";

const OurImpact = () => {
  const iconVariants = {
    hidden: {
      opacity: 0,
      rotate: -90,
      scale: 0,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.42, 0.0, 0.58, 1] as const, // ease-in-out
      },
    },
  };

  // Counter animation component
  type AnimatedCounterProps = {
    value: string | number;
    duration?: number;
  };

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value,
    duration = 2,
  }) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (isInView) {
        const target = typeof value === "string" ? parseInt(value) : value;
        const increment = target / (duration * 60); // 60fps
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
      }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}%</span>;
  };

  const impactData = [
    {
      image: whatwedo2,
      percentage: "96",
      title: "Healthcare Support",
      description:
        "Providing essential healthcare services and resources to communities.",
      icon: HeartPulse,
      position: "bottom",
    },
    {
      image: whatwedo2,
      percentage: "94",
      title: "Education Support",
      description:
        "Providing essential Education services and resources to communities.",
      icon: GraduationCap,
      position: "top",
    },
    {
      image: whatwedo2,
      percentage: "95",
      title: "Food Support",
      description:
        "Providing essential Food services and resources to communities.",
      icon: ShoppingBag,
      position: "bottom",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-accent/70 to-blue-50">
      <div className="max-w-7xl mx-auto py-24 w-full px-4 lg:px-0">
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
              OUR IMPACT
            </h3>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
            variants={itemVariants}
          >
            Highlights our impactful work
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-8 text-center text-sm lg:text-base"
            variants={itemVariants}
          >
            Discover the positive change we've created through our programs,
            partnerships, and dedicated efforts. <br /> From healthcare and
            education to environmental sustainability.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 lg:px-16 mt-20 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {impactData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              {item.position === "top" && (
                <motion.div
                  className="mb-10 flex justify-between gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <motion.h1
                      className="text-3xl lg:text-5xl font-bold text-primary mb-4"
                      variants={statsVariants}
                    >
                      <AnimatedCounter value={item.percentage} />
                    </motion.h1>
                    <motion.h2
                      className="font-semibold text-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="text-muted-foreground mt-2 text-sm lg:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                  <motion.div
                    className="relative"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <motion.div variants={iconVariants}>
                      <item.icon className="size-16" />
                    </motion.div>
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              )}

              <motion.div
                className="aspect-square overflow-hidden flex flex-col relative rounded-xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={item.image}
                    alt="impact image"
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              {item.position === "bottom" && (
                <motion.div
                  className="mt-10 flex justify-between gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <motion.h1
                      className="text-3xl lg:text-5xl font-bold text-primary mb-4"
                      variants={statsVariants}
                    >
                      <AnimatedCounter value={item.percentage} />
                    </motion.h1>
                    <motion.h2
                      className="font-semibold text-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="text-muted-foreground mt-2 text-sm lg:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                  <motion.div
                    className="relative"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <motion.div variants={iconVariants}>
                      <item.icon className="size-16 " />
                    </motion.div>
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-8 bg-primary/60 w-10 rounded-full aspect-square"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurImpact;
