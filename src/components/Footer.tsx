import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/images/lycbo-logo.png";
import FacebookIcon from "@/images/icons/Facebook";
import InstagramIcon from "@/images/icons/InstagramIcon";
import XIcon from "@/images/icons/XIcon";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-accent to-accent">
      <div className="max-w-7xl mx-auto pt-24 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-r border-muted-foreground/20 pr-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src={logo} alt="LYCBO Logo" className="size-20" priority />
              <span className="text-3xl font-black text-primary">LYCBO.</span>
            </Link>

            <p className="text-muted-foreground mt-4 text-sm lg:text-base">
              LYCBO is a non-profit organization dedicated to improving the
              lives of children and families in need. Through our various
              programs and initiatives, we strive to create lasting change and
              build a brighter future for all.
            </p>
            <div className="flex items-center mt-6 justify-start gap-0">
              <div className="flex-1">
                <h2>Customer care</h2>
                <p className="text-muted-foreground mt-2 font-semibold">
                  +254 700 000 000
                </p>
              </div>
              <div className="flex-1">
                <h2>Need live support</h2>
                <p className="text-muted-foreground mt-2 font-semibold">
                  info@lycbo.org
                </p>
              </div>
            </div>

            <h2 className="mt-6">Follow On</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 mr-2 text-primary">
                <Link href={"/"} className="">
                  <FacebookIcon color="var(--primary)" />
                </Link>
                <Link href={"/"} className="">
                  <InstagramIcon color="var(--primary)" />
                </Link>
                <Link href={"/"} className="">
                  <XIcon color="var(--primary)" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 mt-8 lg:mt-0">
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="grid grid-cols-2 mt-8">
              <div>
                <h2 className="font-bold">Quick Links</h2>
                <ul className="mt-2 space-y-4 text-sm lg:text-base">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">Useful Links</h2>
                <ul className="mt-2 space-y-4 text-sm lg:text-base">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 bg-white/20 text-center text-sm lg:text-base text-muted-foreground">
        Copyright © 2025 All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
