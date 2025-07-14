"use client";

import React from "react";

const DonationModal = () => {
  const [amount, setAmount] = React.useState<number | null>(null);
  return (
    <div className="mt-4 z-50">
      <div className="border border-gray-300 rounded-md relative">
        <input
          type="number"
          name="amount"
          value={amount || ""}
          onChange={(e) =>
            setAmount(e.target.value === "" ? null : Number(e.target.value))
          }
          className="w-full py-4 rounded-md focus:outline-none focus:ring-2 font-semibold focus:ring-blue-500 pl-14 pr-2 text-lg"
          placeholder={`1,000`}
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          KES
        </span>
      </div>
      {/* custom placeholder clickable amounts */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[1000, 2000, 5000, 10000, 20000, 50000].map((amt) => (
          <button
            key={amt}
            onClick={() => setAmount(amt)}
            className={`px-4 py-4 text-sm md:text-base rounded-lg ${
              amount === amt
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            KES {amt.toLocaleString()}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          if (amount) {
            alert(
              `Thank you for your donation of KES ${amount.toLocaleString()}`
            );
          } else {
            alert("Please enter a valid amount.");
          }
        }}
        className="rounded-full flex justify-center mt-8 py-3 lg:py-4 items-center gap-2 group font-semibold transition duration-300 w-full hover:bg-primary bg-primary/90 md:text-lg text-white cursor-pointer z-10"
      >
        Donate KES {amount ? amount.toLocaleString() : "0"}
      </button>
      <p className="mt-6 text-xs lg:text-sm text-gray-500 text-center">
        Your donation will help us make a difference in the lives of those in
        need.
      </p>
    </div>
  );
};

export default DonationModal;
