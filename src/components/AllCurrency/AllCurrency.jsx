import React, { useState, useEffect } from "react";
import "./AllCurrency.scss";
import axios from "axios";

function AllCurrency() {
  const [allCurrency, setAllCurrency] = useState([]);
  const [showAll, setShowAll] = useState(false);

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
  const visibleData = showAll ? allCurrency : allCurrency.slice(0, 10);

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
          {visibleData.map((coin, index) => (
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

      {!showAll && allCurrency.length > 10 && (
        <button className="show-all-button" onClick={() => setShowAll(true)}>Show All</button>
      )}
    </div>
  );
}

export default AllCurrency;
