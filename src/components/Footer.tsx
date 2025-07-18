"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/images/lycbo-logo.png";
import FacebookIcon from "@/images/icons/Facebook";
import InstagramIcon from "@/images/icons/InstagramIcon";
import XIcon from "@/images/icons/XIcon";
import { Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-accent">
      <div className="max-w-7xl mx-auto pt-24 pb-8 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-r border-muted-foreground/20 pr-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src={logo} alt="LYCBO Logo" className="size-20" priority />
              <span className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                LYCBO.
              </span>
            </Link>

            <p className="text-muted-foreground mt-4 text-xs md:text-sm lg:text-base">
              LYCBO is a non-profit organization dedicated to improving the
              lives of youth and women in need. Through our various programs and
              initiatives, we strive to create lasting change and build a
              brighter future for all.
            </p>
            <div className="flex items-center mt-6 justify-start gap-0">
              <div className="flex-1">
                <h2>Call Us</h2>
                <p className="text-muted-foreground mt-2 font-semibold text-sm lg:text-base">
                  +254 703 733 835
                </p>
              </div>
              <div className="flex-1">
                <h2>Need live support</h2>
                <p className=" text-sm lg:text-base text-muted-foreground mt-2 font-semibold">
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
            <div className="flex items-center">
              <div className="relative grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border rounded-l-full focus:ring-2 focus:outline-none  focus:ring-blue-500 transition-all text-xs md:text-sm lg:text-base"
                  placeholder="your.email@example.com"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <button className="group flex items-center gap-2 px-4 py-2 text-sm lg:text-base lg:px-8 lg:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer border">
                Subscribe
              </button>
            </div>

            <div className="grid grid-cols-2 mt-8">
              <div>
                <h2 className="font-bold">Quick Links</h2>
                <ul className="mt-2 space-y-4 text-xs md:text-sm lg:text-base">
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
                <ul className="mt-2 space-y-4 text-xs md:text-sm lg:text-base">
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

      <div className="w-full py-6 bg-white/20 text-center text-xs md:text-sm lg:text-base text-muted-foreground">
        Copyright © 2025 | LYCBO All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
