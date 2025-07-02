// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Button } from "./ui/button";
// import logo from "@/images/lycbo-logo.png";

// const HeaderNav = () => {
//   return (
//     <div className="sticky top-0 z-50 bg-transparent backdrop-blur-xs shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
//         <div className="flex items-center gap-2">
//           <Image src={logo} alt="lycbo Logo" className="size-20" />
//           <span className="text-3xl font-[900] text-primary">LYCBO</span>
//         </div>
//         <nav className="lg:flex items-center hidden gap-4 uppercase font-semibold">
//           <Link
//             href="/"
//             className="text-primary hover:text-primary transition-all ease-in-out duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="text-muted/50 hover:text-primary transition-all ease-in-out duration-300"
//           >
//             About
//           </Link>
//           <Link
//             href="/services"
//             className="text-muted/50 hover:text-primary transition-all ease-in-out duration-300"
//           >
//             Programs
//           </Link>
//           <Link
//             href="/contact"
//             className="text-muted/50 hover:text-primary transition-all ease-in-out duration-300"
//           >
//             Get Involved
//           </Link>
//           <Link
//             href="/blog"
//             className="text-muted/50 hover:text-primary transition-all ease-in-out duration-300"
//           >
//             Blog
//           </Link>
//           <Link
//             href="/contact"
//             className="text-muted/50 hover:text-primary transition-all ease-in-out duration-300"
//           >
//             Contact
//           </Link>
//         </nav>
//         <Button className="rounded-full font-semibold p-6">Donate Now</Button>
//       </div>
//     </div>
//   );
// };

// export default HeaderNav;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import logo from "@/images/lycbo-logo.png";
import { usePathname } from "next/navigation";

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs" },
  { href: "/contact", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const HeaderNav = () => {
  const [isStuck, setIsStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll Y offset is more than 0
      setIsStuck(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isStuck ? "backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="lycbo Logo" className="size-20" />
          <span className="text-3xl font-[900] text-primary">LYCBO</span>
        </div>
        <nav className="lg:flex items-center hidden gap-4 uppercase font-semibold">
          {NavLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`text-muted hover:text-primary transition duration-300 ${
                pathname === link.href ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="rounded-full font-semibold px-6 py-3">
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default HeaderNav;
