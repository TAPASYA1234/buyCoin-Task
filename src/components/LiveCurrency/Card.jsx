import React from "react";
import "./Card.scss";

function Card({ currency }) {
  return (
    <div className="card-container">
      <div className="section-one">
        <div className="info">
          <h4> {currency.currToName}</h4>
          <p>{currency.marketName}</p>
        </div>
      </div>
      <div className="section-two">
        <div className="price">
          <h5 className="title">Price</h5>
          <p className="price-item">
            Ask Price: <span>{currency.ask}</span>{" "}
          </p>
          <p className="price-item">
            Bid Price:<span>{currency.bid}</span>{" "}
          </p>
          <p className="price-item">
            Spread:<span>{currency.sprd}</span>{" "}
          </p>
        </div>
        <div className="last-day">
          <h5 className="title">24 Hour</h5>
          <p className="last-day-item">
            {" "}
            Change: <span>{currency.c24}</span>
          </p>
          <p className="last-day-item">
            High: <span>{currency.h24}</span>{" "}
          </p>
          <p className="last-day-item">
            Low: <span>{currency.l24}</span>{" "}
          </p>
        </div>
      </div>
      <div className="section-three">
        <div className="last-trade">
          <h5 className="title">Last Trade</h5>
          <p className="last-trade-item">
            Buy Rate: <span>{currency.LBRate}</span>
          </p>
          <p className="last-trade-item">
            Buy Volume: <span>{currency.LBVol}</span>
          </p>
          <p className="last-trade-item">
            Sell Rate: <span>{currency.LSRate}</span>
          </p>
          <p className="last-trade-item">
            Sell Volume: <span>{currency.LSVol}</span>
          </p>
          <p className="last-trade-item">
            Trade Rate: <span>{currency.LTRate}</span>
          </p>
          <p className="last-trade-item">
            Trade Volume: <span>{currency.LTVol}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
