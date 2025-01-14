"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { formatDistanceToNow } from "date-fns";

export default function NumberPage() {
  const params = useParams();
  const router = useRouter();
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const validateNumberAndFetchMessages = async () => {
      try {
        // First API call: Validate the number
        const validateResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/countries/US`
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
      {/* <h1>Number: {params.slug}</h1> */}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p className="py-4 text-sm">{message.body}</p>
            {/* <span className="time">
              {formatDistanceToNow(new Date(message.created_at), {
                addSuffix: true,
              })}
            </span> */}
          </div> 
        ))}
      </div>
    </div>
  );
}
