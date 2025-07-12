"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import logo from "@/images/lycbo-logo.png";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isStuck
            ? "backdrop-blur-md bg-blue-50/90 shadow-lg"
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
            className="rounded-full hidden lg:flex font-semibold px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href="/donate">Donate Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            <MenuIcon className="size-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-primary">Menu</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="size-5" />
            </Button>
          </div>

          <nav className="p-4 space-y-2">
            {NAV_LINKS.map((link, index) => (
              <div
                key={link.href}
                className={`transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg uppercase font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pathname === link.href
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-muted-foreground hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div
              className={`pt-4 border-t transform transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${NAV_LINKS.length * 50}ms` }}
            >
              <Button
                className="w-full rounded-full font-semibold py-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/donate" onClick={toggleMobileMenu}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
