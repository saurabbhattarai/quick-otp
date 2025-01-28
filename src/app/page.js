"use client";

import { useState, useEffect } from "react"; 
import { useRouter } from 'next/navigation';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function Home() { 
  const router = useRouter();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/countries`);
      const data = await response.json();
      setCountries(data.data.data);
    }
    getCountries();
  }, []); 

  const navigateToUS = () => {
    router.push('/us');
  } 

  const navigateToCanada = () => {
    router.push('/ca');
  }

  return (
    <>
    {/* Sticky Header */}
    <div className="sticky top-0 z-50 rounded-lg p-4">
      <Header />
    </div> 
    <Hero />
    {/* Content Below the Header */}
    <div className="mt-8 py-12">
      {countries.map((country, index) => {
        if (country.country_code === "US") {
          return (
            <button
              onClick={navigateToUS}
              className="p-4 bg-green-100 hover:bg-green-200 transition-colors cursor-pointer w-full mb-2"
              key={index}
            >
              <div>
                <p>Country: United States</p>
                {/* <p>Total Number: {country.total_count}</p> */}
              </div>
            </button>
          );
        } else if (country.country_code === "CA") {
          return (
            <button
              onClick={navigateToCanada}
              className="p-4 bg-green-100 hover:bg-green-200 transition-colors cursor-pointer w-full mb-2"
              key={index}
            >
              <div>
                <p>Country: Canada</p>
                {/* <p>Total Number: {country.total_count}</p> */}
              </div>
            </button>
          );
        } else {
          return (
            <div className="p-4 bg-gray-100 mb-2 w-full" key={index}>
              <p>Country: {country.country_code}</p>
              {/* <p>Total Number: {country.total_count}</p> */}
            </div>
          );
        }
      })}
    </div>
  </>  
  );
}
