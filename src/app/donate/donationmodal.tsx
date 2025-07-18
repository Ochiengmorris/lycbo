"use client";

import React, { useState } from "react";

const Donationmodal2 = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit() {}

  return (
    <div className="mt-4">
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
      <div className="mt-6 grid grid-cols-3 xl:grid-cols-4 gap-3">
        {[1000, 2000, 5000, 10000, 15000, 20000, 30000, 50000].map((amt) => (
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
      <div className="py-12 ">
        <h2 className="text-2xl font-semibold mb-8">Select Payment Method</h2>
        <h3 className="font-semibold text-xl mb-6">Personal Info</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm md:text-base">
              First Name
            </span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="w-full p-2 lg:p-4 border rounded-md focus:outline-none focus:ring-2 font-medium focus:ring-blue-500 lg:text-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold mb-2  text-sm md:text-base">
              Last Name
            </span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="w-full p-2 lg:p-4 border rounded-md focus:outline-none focus:ring-2 font-medium focus:ring-blue-500 lg:text-lg"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <span className="font-semibold mb-2  text-sm md:text-base">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full p-2 lg:p-4 border rounded-md focus:outline-none focus:ring-2 font-medium focus:ring-blue-500 lg:text-lg"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="rounded-full flex justify-center mt-8 py-3 lg:py-4 items-center gap-2 group font-semibold transition duration-300 px-8 hover:bg-primary bg-primary/90 md:text-lg text-white cursor-pointer z-10 text-sm"
        >
          Donate KES {amount ? amount.toLocaleString() : "0"}
        </button>
        <p className="mt-6 text-xs lg:text-sm text-gray-500">
          Your donation will help us make a difference in the lives of those in
          need.
        </p>
      </div>
    </div>
  );
};

export default Donationmodal2;
