import React from "react";
import "./CurrencyTable.css";
import usePrevious from "../../usePrevious";
export default function CurrencyTableRows({
  rank,
  name,
  priceUsd,
  marketCapUsd,
  vwap24Hr,
  supply,
  volumeUsd24Hr,
  changePercent24Hr,
  symbol,
}) {
  const prev = usePrevious(priceUsd);
  return (
    <div
      className={`CurrencyTableRows-Container ${
       Number(prev).toFixed(2)  <= Number(priceUsd).toFixed(2) ? "green" : "red"
      }`}
    >
      <div className="Row-Grid">
        <div className="Row-Content Ranked-Content">
          <p>{rank}</p>
        </div>
        <div className="Row-Content Named-Content">
          <img
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt="symbol"
          />
          <div className="Name-Symbol-Container">
            <p>{name}</p>
            <p className="Symbol-text">{symbol}</p>
          </div>
        </div>
        <div className="Row-Content">
          <p>${convert(priceUsd)}</p>
        </div>
        <div className="Row-Content">
          <p>${convert(marketCapUsd)}</p>
        </div>
        <div className="Row-Content">
          <p>${convert(vwap24Hr)}</p>
        </div>
        <div className="Row-Content">
          <p>{convert(supply)}</p>
        </div>
        <div className="Row-Content">
          <p>${convert(volumeUsd24Hr)}</p>
        </div>
        <div
          className={`Row-Content ${changePercent24Hr >= 0 ? "Green" : "Red"}`}
        >
          <p>{convert(changePercent24Hr)}%</p>
        </div>
      </div>
    </div>
  );
}
function convert(labelValue) {
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : Math.abs(Number(labelValue)).toFixed(2);
}
