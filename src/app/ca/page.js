'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Numbers() {
  const router = useRouter();
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    async function getNumbers() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/countries/CA`);
        const result = await response.json();
        // Filter numbers with released_at === null
        const filteredNumbers = result.data.data.filter(number => number.released_at === null);
        setNumbers(filteredNumbers);
      } catch (error) {
        console.error("Error fetching numbers:", error);
      }
    }
    getNumbers();
  }, []);

  return (
    <>
      <h1>US Details</h1>
      <ul>
        {numbers.length > 0 ? (
          numbers.map((number, index) => (
            <li key={index}> 
             <button onClick={() => router.push(`/us/${number.number}`)}>Number {number.number}
              </button>
            </li>
          )
          )
        ) : (
          <p>No available numbers.</p>
        )}
      </ul>
    </>
  );
}
