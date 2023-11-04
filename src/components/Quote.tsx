import React, { useState, useEffect } from "react";

interface QuoteProps {
  text: string;
  author: string;
}

function Quote() {
  const [quote, setQuote] = useState<QuoteProps | null>(null);
  useEffect(() => {
    async function api() {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setQuote({
          text: data.content,
          author: data.author,
        });
      } catch (err) {
        console.log(err);
      }
    }
    api();
  }, []);
  return (
    <div>
      {quote ? (
        <div>
          <p>Author: {quote.author}</p>
          <p>Text: {quote.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Quote;
