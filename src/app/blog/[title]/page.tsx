"use client";

import HeaderNav from "@/components/HeaderNav";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarDays,
  DotIcon,
  Mail,
  MessageSquare,
  Quote,
  Send,
  Tags,
  User,
} from "lucide-react";
import React, { useState } from "react";

const BlogPage = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [likes, setLikes] = useState(127);

  const handleSubmit = () => {
    if (comment.trim() && name.trim() && email.trim()) {
      // Simulate comment submission
      alert("Comment submitted successfully!");
      setComment("");
      setName("");
      setEmail("");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <HeaderNav />
      </div>
      <div className="pt-16 pb-8 bg-gray-950 h-[400px] lg:h-[520px]">
        <div className="max-w-7xl mx-auto h-full px-4 flex flex-col justify-center text-white space-y-2">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 lg:mb-6 w-fit">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Featured Article</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">
            Empowering Communities through Education and Health
          </h1>
          <div className="mt-4 flex lg:gap-14 flex-wrap gap-6 items-center">
            <div className="flex gap-4 items-center">
              <CalendarDays className="text-primary size-6" />
              <span className="text-sm lg:text-base">Jan 2nd, 2025</span>
            </div>
            <div className="flex gap-4 items-center">
              <Tags className="text-primary size-6" />
              <span>Empowerment</span>
            </div>
            <div className=" items-center gap-4 hidden lg:flex">
              <MessageSquare className="text-primary size-6" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-24 ">
          <div className="h-[270px] lg:h-[650px] bg-violet-950 rounded-4xl"></div>

          <div className="lg:px-16 py-8 px-4 z-20 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700 lg:text-lg">
              Protecting forests is at the heart of our environmental mission,
              as they are vital to the health of our planet and the well-being
              of future generations. Forests play a critical role in combating
              climate change by absorbing carbon dioxide, preserving
              biodiversity, and providing clean air and water. Our organization
              is dedicated to conserving and restoring forest ecosystems through
              reforestation projects, community-led initiatives, and sustainable
              land-use practices.
            </p>
            <p className="leading-relaxed text-gray-700 lg:text-lg mt-8">
              By working hand-in-hand with local communities, governments, and
              global partners, we aim to create a balanced relationship between
              humans and nature. Together, we can ensure that forests continue
              to thrive, supporting livelihoods, wildlife, and the planet for
              years to come.
            </p>

            <div className="bg-gray-950 lg:p-10 p-4 rounded-4xl items-start flex flex-col lg:flex-row gap-4 my-4">
              <div>
                <Quote className="text-primary size-10 rotate-180 " />
              </div>
              <p className="text-muted font-semibold lg:text-xl">
                Safeguarding forests is essential for our planet’s health and
                future generations. Through reforestation, sustainable
                practices, and community engagement, we aim to protect
                ecosystems, combat climate change, preserve biodiversity.
              </p>
            </div>

            <p className="leading-relaxed text-gray-700 lg:text-lg">
              Our mission focuses on protecting forests to preserve
              biodiversity, combat climate change, and support sustainable
              livelihoods. Through reforestation, conservation efforts, and
              community partnerships, we work to ensure a greener, healthier
              future for our planet.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 mt-12">
              Building a greener future together
            </h2>

            <p className="leading-relaxed text-gray-700 lg:text-lg">
              Building a greener future together involves collaborative efforts
              to protect and restore our planet’s vital ecosystems. Through
              reforestation, sustainable practices, and community involvement,
              we work collectively to ensure a healthier, more sustainable world
              for all.
            </p>
            <p className="leading-relaxed text-gray-700 lg:text-lg mt-8">
              Reforestation and Tree Planting Initiatives Community-Based
              Conservation Programs Sustainable Land Management Practices
              Community Empowerment and Training Support for Indigenous and
              Local Communities Building a greener future together is about
              coming together as a global community to safeguard our planet’s
              natural resources. Through reforestation, conservation efforts,
              and sustainable practices, we’re addressing the challenges of
              climate change and environmental degradation head-on. By
              empowering individuals, engaging with communities, and forming
              strategic partnerships, we’re creating a legacy.
            </p>

            {/* Tags */}
            <div className="flex flex-col lg:flex-row gap-4 py-8 border-t border-gray-200">
              <span className="text-gray-600 font-medium">Tags:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs lg:text-sm font-medium">
                  Empowerment
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs lg:text-sm font-medium">
                  Environment
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs lg:text-sm font-medium">
                  Sustainability
                </span>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-16 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 ">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Leave a Reply
              </h2>
              <p className="text-gray-600 mb-8 text-xs lg:text-sm">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comment *
                  </label>
                  <div className="relative">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none text-xs md:text-sm lg:text-base"
                      placeholder="Share your thoughts..."
                    />
                    <MessageSquare className="absolute top-3 right-3 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-xs md:text-sm lg:text-base"
                        placeholder="Your name"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-xs md:text-sm lg:text-base"
                        placeholder="your.email@example.com"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="group flex items-center gap-2 px-4 py-2 text-sm lg:text-base lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 z-10 cursor-pointer"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
