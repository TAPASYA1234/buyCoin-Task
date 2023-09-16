import React, { useState, useEffect } from "react";
import "./AllCurrency.scss";
import axios from "axios";

function AllCurrency() {
  const [allCurrency, setAllCurrency] = useState([]);

  const getAllCurrencyData = () => {
    try {
      axios
        .get("https://api.buyucoin.com/ticker/v1.0/allCurrencies")
        .then((res) => res.data)
        .then((d) => setAllCurrency(d.data));
    } catch {
      console.log("Error in all data");
    }
  };

  console.log("All currency", allCurrency);

  useEffect(() => {
    getAllCurrencyData();
  }, []);

  return (
    <div className="coin-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deposit</th>
            <th>Withdraw</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {allCurrency.map((coin, index) => (
            <tr key={index}>
              <td>
                {coin.name}
                <span>({coin.code})</span>
              </td>
              <td>
                Min: {coin.minDeposit} - Max: {coin.maxDeposit}
              </td>
              <td>
                Min: {coin.minWithdraw} - Max: {coin.maxWithdraw}
              </td>
              <td>{coin.network}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllCurrency;
