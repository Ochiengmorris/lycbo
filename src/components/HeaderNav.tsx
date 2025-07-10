"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import logo from "@/images/lycbo-logo.png";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const HeaderNav: React.FC = () => {
  const [isStuck, setIsStuck] = useState(false);
  const pathname = usePathname();

  // Memoize scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 130;
    setIsStuck(scrolled);
  }, []);

  useEffect(() => {
    // Set initial state
    handleScroll();

    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const getLinkClassName = (href: string) => {
    const baseClasses =
      "text-muted hover:text-primary transition-colors duration-300";

    if (pathname === href) {
      return `${baseClasses} text-primary font-bold`;
    }

    if (isStuck) {
      return `${baseClasses} text-muted-foreground`;
    }

    return baseClasses;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isStuck
          ? "backdrop-blur-md bg-blue-50 shadow-lg hidden"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={logo}
            alt="LYCBO Logo"
            className="size-10 md:size-20"
            priority
          />
          <span className="md:text-3xl text-2xl font-black text-primary">
            LYCBO.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 uppercase font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={getLinkClassName(link.href)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          className="rounded-full hidden md:flex font-semibold px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
          asChild
        >
          <Link href="/donate">Donate Now</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          className="lg:hidden rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
          aria-label="Toggle Menu"
          onClick={() => {
            // Implement mobile menu toggle logic here
          }}
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </header>
  );
};

export default HeaderNav;
