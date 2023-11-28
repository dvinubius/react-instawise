import React, { useEffect, useState } from "react";
import axios from "axios";

const Title = () => {
  const initialQuote = { text: "All is well", author: "Life" };

  const [count, setCount] = useState(0);
  const [quotes, setAllQuotes] = useState([initialQuote]);
  const [hiddenQuote, setHiddenQuote] = useState(false);

  useEffect(() => {
    let interval;
    setTimeout(async () => {
      const result = await axios.get("https://type.fit/api/quotes");
      setHiddenQuote(true);
      await timeout(1000);
      setAllQuotes(result.data);
      setHiddenQuote(false);
      interval = setInterval(async () => {
        setHiddenQuote(true);
        await timeout(1000);
        setCount(Math.floor(Math.random() * result.data.length - 1));
        setHiddenQuote(false);
      }, 11000);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="title">
      <h1>InstaWise</h1>
      <h2>Your Inspiring Images</h2>
      <div className={`quote ${hiddenQuote ? "hiddenQuote" : ""}`}>
        <p>{quotes[count].text}</p>
        <p style={{ textAlign: "right" }}>
          <i>{quotes[count].author}</i>
        </p>
      </div>
    </div>
  );
};

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default Title;
