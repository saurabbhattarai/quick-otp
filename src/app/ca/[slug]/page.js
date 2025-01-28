"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NumberPage() {
  const params = useParams();
  const router = useRouter();
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [date, setDate] = useState(new Date());

  // Helper function to extract codes
  const extractCodes = (text) => {
    const codeRegex = /\b\d{4,6}\b/g; // Matches 4 to 6 digit numbers (typical OTPs)
    return text.match(codeRegex) || [];
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(
      () => alert(`Code "${code}" copied!`),
      (err) => console.error("Failed to copy: ", err)
    );
  };

  useEffect(() => {
    const validateNumberAndFetchMessages = async () => {
      try {
        // First API call: Validate the number
        const validateResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/countries/CA`
        );
        const numbers = await validateResponse.json();
        const filteredNumbers = numbers.data.data
          .filter((number) => number.released_at === null)
          .map((number) => number.number);

        let formattedSlug = decodeURIComponent(params.slug);
        if (!formattedSlug.startsWith('+')) {
          formattedSlug = '+' + formattedSlug;
        }

        console.log(filteredNumbers);
        console.log(params.slug);

        const numberExists = filteredNumbers.some(
          (number) => number === formattedSlug
        );

        setIsValidNumber(numberExists);
        if (!numberExists) {
          router.push('/404');
          return;
        }

        // Second API call: Fetch messages for the validated number
        const messagesResponse = await fetch(
          `https://freephone.io/api/v1/numbers/${formattedSlug}`
        ); 

        console.log(messagesResponse);
        const messagesData = await messagesResponse.json();

        if (messagesResponse.ok) {
          console.log("Messages fetched successfully:", messagesData);
          setMessages(messagesData.data.data);
        } else {
          console.error("Error fetching messages:", messagesData.message);
        }
      } catch (error) {
        console.error("Error validating number or fetching messages:", error);
        router.push('/404');
      } finally {
        setLoading(false);
      }
    };

    validateNumberAndFetchMessages();
  }, [params.slug, router]);

  if (loading || !isValidNumber) {
    return <div>Loading...</div>;
  }  

  return (
    <div className="container">
      <div className="messages">
        {messages.map((message, index) => {
          const codes = extractCodes(message.body);

          return (
            <div key={index} className="message">
              <p className="py-4 text-sm">{message.body}</p>
              <p className="py-4 text-sm">{message.created_at}</p>
              <p className="py-4 text-sm">{message.sent_by}</p>

              {codes.length > 0 && (
                <div className="codes mt-2">
                  <p className="font-bold text-sm">Extracted Codes:</p>
                  {codes.map((code, codeIndex) => (
                    <button
                      key={codeIndex}
                      className="px-2 py-1 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
                      onClick={() => handleCopy(code)}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
