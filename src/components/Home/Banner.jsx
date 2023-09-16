import React from "react";
import "./Banner.scss";
import bannerImg from "./bitcoinWallpaper.jpg";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner-content">
        <h1 className="banner-heading animated-text">Buy Your Coin</h1>
        <p className="">
          {" "}
          Bitcoin and Beyond: Exploring the World of Digital Currency
        </p>
      </div>
    </div>
  );
}

export default Banner;
