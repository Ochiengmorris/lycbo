"use client";

import React from "react";

const InfiniteTextSlider = () => {
  const messages = [
    "Education Support",
    "Healthcare Support",
    "Financial Support",
    "Community Support",
  ];

  return (
    <div className="w-full py-6 overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 2));
          }
        }

        .scrolling-text {
          display: flex;
          animation: scroll 60s linear infinite;
          width: fit-content;
        }

        .text-outline {
          color: transparent;
          -webkit-text-stroke: 2px var(--primary);
          font-family: "Arial Black", sans-serif;
          white-space: nowrap;
        }

        .text-item {
          display: inline-flex;
          align-items: center;
          padding: 0 1rem;
        }
      `}</style>

      <div className="scrolling-text">
        {/* Render the messages twice for seamless loop */}
        {[...messages, ...messages].map((message, index) => (
          <div key={index} className="text-item">
            <span className="text-8xl font-bold text-outline tracking-wide uppercase">
              {message} <span className="ml-4 align-middle">*</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTextSlider;
