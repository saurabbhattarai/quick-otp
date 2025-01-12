"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NumberPage() {
  const params = useParams();
  const router = useRouter();
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateNumber = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/countries/US`
        );
        const numbers = await response.json();
        const filteredNumbers = numbers.data.data
          .filter((number) => number.released_at === null)
          .map((number) => number.number); 

          let formattedSlug = decodeURIComponent(params.slug);
          if (!formattedSlug.startsWith('+')) {
            formattedSlug = '+' + formattedSlug;
          }

        console.log(filteredNumbers);
        console.log(params.slug);

        // Fixed: directly compare with the phone number string
        const numberExists = filteredNumbers.some(
          (number) => number === formattedSlug
        );
        console.log(numberExists);

        setIsValidNumber(numberExists);
        if (!numberExists) {
            router.push('/404'); // or wherever you want to redirect
        }
      } catch (error) {
        console.error("Error validating number:", error);
        router.push('/404');
      } finally {
        setLoading(false);  // Also fixed: changed to false to stop loading
      }
    };

    validateNumber();
  }, [params.slug, router]);

  if (loading || !isValidNumber) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Number: {params.slug}</h1>
      {/* Your page content */}
    </div>
  );
}