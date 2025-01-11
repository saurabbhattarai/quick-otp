"use client";

import { useState, useEffect } from "react"; 
import { useRouter } from 'next/navigation';

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
      <h1>Country Details</h1>
      {countries.map((country, index) => {
        if (country.country_code === "US") {
          return (
            <button
              onClick={navigateToUS}
              className="p-4 bg-green-100 hover:bg-green-200 transition-colors cursor-pointer"
              key={index}
            >
              <div key={index}>
                <p>Country: United States</p>
                <p>Total Number: {country.total_count}</p>
              </div>
            </button>
          );
        } else if (country.country_code === "CA") {
          return ( 
            <button 
              onClick={navigateToCanada}
              className="p-4 bg-green-100 hover:bg-green-200 transition-colors cursor-pointer"
              key={index}
            >
            <div key={index}>
              <p>Country: Canada</p>
              <p>Total Number: {country.total_count}</p>
            </div>
            </button>
          );
        } else {
          return (
            <div key={index}>
              <p>Country: {country.country_code}</p>
              <p>Total Number: {country.total_count}</p>
            </div>
          );
        }
      })}
    </>
  );
}
