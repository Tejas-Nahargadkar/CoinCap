import { ArrowDropUp } from "@mui/icons-material";
import React, { useCallback, useEffect, useState } from "react";
import "./CurrencyTable.css";
import CurrencyTableRows from "./CurrencyTableRows";
export default function CurrencyTable({ limit }) {
  const [Currencies, setCurrencies] = useState([]);
  const fetchCurrencies = useCallback(
    async (signal) => {
      fetch(`https://api.coincap.io/v2/assets?limit=${limit}`, {
        signal,
      }).then((res) => {
        res.json().then((data) => {
          setCurrencies(data.data);
        });
      });
    },
    [limit]
  );
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const x = setInterval(() => fetchCurrencies(signal), 3000);
    return () => {
      controller.abort();
      clearInterval(x);
    };
  }, [fetchCurrencies]);
  return (
    <div className="MainTable-Container">
      <div className="MainTable-Rows">
        <div className="MainTable-Row-Cells Ranked-Cell">
          <p>
            Rank <ArrowDropUp />
          </p>
        </div>
        <div className="MainTable-Row-Cells Name-Cell">
          <p>Name</p>
        </div>
        <div className="MainTable-Row-Cells">
          <p>Price</p>
        </div>
        <div className="MainTable-Row-Cells">
          <p>Market Cap</p>
        </div>
        <div className="MainTable-Row-Cells">
          <p>VWAP(24Hr)</p>
        </div>
        <div className="MainTable-Row-Cells">
          <p>Supply</p>
        </div>
        <div className="MainTable-Row-Cells">
          <p>Volume(24hr)</p>
        </div>
        <div className="MainTable-Row-Cells">
          <p>Change(24hr)</p>
        </div>
      </div>

      {Currencies.map((data) => (
        <CurrencyTableRows {...data} />
      ))}
    </div>
  );
}
