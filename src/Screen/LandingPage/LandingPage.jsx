import React, { useState } from "react";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import "./LandingPage.css";
export default function LandingPage() {
  const [limit, setLimit] = useState(50)
  return (
    <div className="LandingPage-Container">
      <div className="Gradient-Container">
        <div className="Gradient-Content-Container">
          <div className="Gradient-Content">
            <p>MARKET CAP</p>
            <p>$1.20T</p>
          </div>
          <div className="Gradient-Content">
            <p>EXCHANGE VOLUME</p>
            <p>$68.94B</p>
          </div>
          <div className="Gradient-Content">
            <p>ASSETS</p>
            <p>2,295</p>
          </div>
          <div className="Gradient-Content">
            <p>EXCHANGES</p>
            <p>73</p>
          </div>
          <div className="Gradient-Content">
            <p>MARKETS</p>
            <p>14,092</p>
          </div>
          <div className="Gradient-Content">
            <p>BTC DOM INDEX</p>
            <p>30.9%</p>
          </div>
        </div>
      </div>
      <div className="Currency-Table">
        <CurrencyTable limit={limit} />
      </div>
      <div className="ShowMore-button-Container">
        <button className="ShowMore-button" onClick={() => setLimit(limit + 50)}>View More</button>
      </div>
    </div>
  );
}
