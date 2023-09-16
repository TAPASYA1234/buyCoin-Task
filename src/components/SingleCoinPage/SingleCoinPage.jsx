import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SingleCoinPage.scss";

function SingleCoinPage() {

    const {id} = useParams();
    const [coin,setCoin] = useState();

    const getCoinData = async ()=>{
        await axios.get( `https://api.buyucoin.com/ticker/v1.0/liveData?symbol=${id}`)
        .then((res)=> res.data)
        .then((d)=> setCoin(d.data[0]))
    }
    useEffect(()=>{
        getCoinData();
    },[])
    console.log("sible coin data",coin);
  return (
    <div>



    <div className="crypto-card">
      <div className="crypto-header">
        <h2>{coin.marketName}</h2>
        <p>{coin.currToName}</p>
      </div>
      <div className="crypto-details">
        <div className="crypto-column">
          <h3>Price</h3>
          <p>Ask Price: {coin.ask}</p>
          <p>Bid Price: {coin.bid}</p>
        </div>
        <div className="crypto-column">
          <h3>24-Hour Stats</h3>
          <p>Change: {coin.c24}</p>
          <p>High: {coin.h24}</p>
          <p>Low: {coin.l24}</p>
        </div>
        <div className="crypto-column">
          <h3>Last Trade</h3>
          <p>Last Buy Rate: {coin.LBRate}</p>
          <p>Last Buy Volume: {coin.LBVol}</p>
          <p>Last Sell Rate: {coin.LSRate}</p>
          <p>Last Sell Volume: {coin.LSVol}</p>
          <p>Last Trade Rate: {coin.LTRate}</p>
          <p>Last Trade Volume: {coin.LTVol}</p>
        </div>
      </div>
    </div>








    </div>
  )
}

export default SingleCoinPage