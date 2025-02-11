"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

export default function Home() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/countries`,
        {
          cache: "force-cache", // Cache the response
        }
      );
      const data = await response.json();
      setCountries(data.data.data);
    }
    getCountries();
  }, []);

  const navigateToUS = () => {
    router.push("/us");
  };

  const navigateToCanada = () => {
    router.push("/ca");
  };

  // Mapping country codes to flag images
  const getFlag = (countryCode) => {
    switch (countryCode) {
      case "US":
        return "https://api.iconify.design/circle-flags:us.svg"; // High-quality US flag
      case "CA":
        return "https://api.iconify.design/circle-flags:ca.svg"; // High-quality Canada flag
      default:
        return "https://api.iconify.design/circle-flags:un.svg"; // Default UN flag
    }
  };

  // Handle card click based on country code
  const handleCardClick = (countryCode) => {
    if (countryCode === "US") {
      navigateToUS();
    } else if (countryCode === "CA") {
      navigateToCanada();
    }
    // Add more conditions for other countries if needed
  };

  return (
    <>
      <div className="bg-green-50">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 rounded-lg p-4">
          {/* <Header /> */}
        </div>
        <Hero /> {/* Hero Section */}
        <div className = "border-t-2 container py-12">
          <div className="flex items-center justify-center py-2">
            <span className="font-bold text-2xl text-center">
              Available Countries
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center bg-green-50 py-4">
            {countries.map((country, index) => {
              const flagImage = getFlag(country.country_code);
              const country_name =
                country.country_code === "US"
                  ? "United States"
                  : country.country_code === "CA"
                  ? "Canada"
                  : country.country_code; // Fallback to country code if not US or CA

              return (
                <Card
                  key={index}
                  flag={
                    <img
                      src={flagImage}
                      alt={`${country.country_code} flag`}
                      className="w-12 h-12"
                    />
                  }
                  countries={country_name}
                  onClick={() => handleCardClick(country.country_code)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
