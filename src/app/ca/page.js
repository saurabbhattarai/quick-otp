'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Header from "../components/Header/Header";
import Card from "../components/Card/Card"; // Import the Card component

export default function Numbers() {
  const router = useRouter();
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    async function getNumbers() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/countries/CA`,
          {
            cache: "force-cache", // Cache the response
          }
        );
        const result = await response.json();
        // Filter numbers with released_at === null
        const filteredNumbers = result.data.data.filter(
          (number) => number.released_at === null
        );
        setNumbers(filteredNumbers);
      } catch (error) {
        console.error("Error fetching numbers:", error);
      }
    }
    getNumbers();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-yellow-50 to-green-50 py-12">
        <h1 className="text-3xl font-bold text-center my-8 text-green-900">
          CA Numbers
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {numbers.length > 0 ? (
            numbers.map((number, index) => (
              <Card
                key={index}
                countries={
                  <div className="relative">
                    {/* Online Indicator with Pulse Animation */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    {/* Flag Icon */}
                    <img
                      src="https://api.iconify.design/circle-flags:ca.svg"
                      className="w-6 h-6 mx-auto mb-2"
                      alt="CA Flag"
                    />

                    {/* Check Inbox Button */}
                    <span className="text-xs flex items-center rounded-full border py-1 px-4 border-green-800 font-semibold text-green-800 hover:bg-green-800 hover:text-white">
                      Check Inbox
                    </span>

                    {/* Display the Number */}
                    <span className="text-sm text-gray-600">
                      {number.number}
                    </span>
                  </div>
                }
                onClick={() => router.push(`/ca/${number.number}`)}
              />
            ))
          ) : (
            <p className="text-lg text-gray-700">No available numbers.</p>
          )}
        </div>
      </div>
    </>
  );
}
