import React, { useState, useEffect } from "react";
import "./LiveCurrency.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Loader from "./Loader";

function LiveCurrency() {
  const [liveData, setLiveData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const maxRequestsPerMinute = 10;
  const interval = (60 * 1000) / maxRequestsPerMinute;

  let requestCounter = 0;

  const getLiveData = async () => {
    if (requestCounter >= maxRequestsPerMinute) {
      console.log(
        `Rate limit reached. Waiting for ${interval / 1000} seconds.`
      );
      await delay(interval);
      requestCounter = 0;
    }
    try {
      setIsLoading(true);
      const allData = await axios
        .get("https://api.buyucoin.com/ticker/v1.0/liveData")
        .then((res) => res.data)
        .then((d) => setLiveData(d.data));
      setIsLoading(false);
      requestCounter++;
    } catch (error) {
      if (error.response.status === 429) {
        // Handle rate limit exceeded error
        const retryAfter = error.response.headers["retry-after"];
        console.log(`Rate limit exceeded. Retry after ${retryAfter} seconds.`);
      } else {
        // Handle other errors
        console.error("Request failed:", error.message);
      }
    }
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  console.log("kiveData", liveData);
  const navigate = useNavigate();

  useEffect(() => {
    getLiveData();
  }, []);

  const cardHandler = (currency) => {
    console.log("handler clicked");
    if (currency === undefined || currency.marketName == undefined) return;
    else navigate("/coin/" + currency?.marketName);
  };

  const items = liveData?.map((currency) => {
    return (
      <div key={currency.baseCurrencyId} onClick={cardHandler}>
        <Card currency={currency} />
      </div>
    );
  });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <div className="live-currency-heading">
            <span>Stay Informed With Live Cryptocurrency Stats</span>
          </div>
          <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
          >
            {items}
          </Carousel>
        </>
      )}
    </>
  );
}

export default LiveCurrency;
