"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header/Header";
import { formatDistanceToNow } from "date-fns";

export default function NumberPage() {
  const params = useParams();
  const router = useRouter();
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const validateNumberAndFetchMessages = async () => {
      try {
        // Validate the number
        const validateResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/countries/US`
        );
        const numbers = await validateResponse.json();
        const filteredNumbers = numbers.data.data
          .filter((number) => number.released_at === null)
          .map((number) => number.number);

        let formattedSlug = decodeURIComponent(params.slug);
        if (!formattedSlug.startsWith("+")) {
          formattedSlug = "+" + formattedSlug;
        }

        const numberExists = filteredNumbers.includes(formattedSlug);
        setIsValidNumber(numberExists);

        if (!numberExists) {
          router.push("/404");
          return;
        }

        // Fetch messages
        const messagesResponse = await fetch(
          `https://freephone.io/api/v1/numbers/${formattedSlug}`
        );
        const messagesData = await messagesResponse.json();

        if (messagesResponse.ok) {
          setMessages(messagesData.data.data);
        } else {
          console.error("Error fetching messages:", messagesData.message);
        }
      } catch (error) {
        console.error("Error validating number or fetching messages:", error);
        router.push("/404");
      } finally {
        setLoading(false);
      }
    };

    validateNumberAndFetchMessages();
  }, [params.slug, router]);

  const copyOTP = (text) => {
    const match = text.match(/\b\d{4,6}\b/); // Extracts 4-6 digit OTP
    if (match) {
      navigator.clipboard.writeText(match[0]);
      alert(`${match[0]} copied to clipboard!`);
    } else {
      alert("No OTP found in message.");
    }
  };

  if (loading || !isValidNumber) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-yellow-50 to-green-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-800"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 flex flex-col items-center">
      <Header />
  
      <div className="container mx-auto p-4 w-full max-w-md">
        {/* Phone Number Header */}
        <h1 className="text-xl font-semibold text-center text-green-900 mt-20 flex items-center justify-center gap-2">
          {decodeURIComponent(params.slug)}
          <img
            src="https://api.iconify.design/circle-flags:us.svg"
            className="w-6 h-6"
            alt="US Flag"
          />
        </h1>
  
        {/* Messages Section */}
        <div className="py-12 space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-white px-6 py-4 rounded-2xl text-center shadow"
            >
              <p className="font-bold text-green-800 mb-2">
                For: {message.sent_by || "Unknown"}
              </p>
              <p className="text-gray-800 text-lg mb-3">{message.body}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(message.created_at), {
                    addSuffix: true,
                  })}
                </span>
                <button
                  onClick={() => copyOTP(message.body)}
                  className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Copy OTP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
