import React from "react";
import "./Banner.scss";
import bannerImg from "./crypto-bg.jpg";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner-content">
        <h1 className="banner-heading animated-text">Crypto Revolution.Join Movement</h1>
        <p className="">
          {" "}
          Bitcoin and Beyond: Exploring the World of Digital Currency
        </p>
      </div>
    </div>
  );
}

export default Banner;
