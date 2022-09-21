import { Facebook, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import googleplaylogo from "../../Asset/googleplaylogo.png";
import appstorelogo from "../../Asset/applestorelogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-Row">
        <div className="Intro-Container">
          <h4>COINCAP.IO</h4>
          <div className="Intro-content">
            <a href="/">Methodology</a>
            <a href="/">Support</a>
            <a href="/">Our API</a>
            <a href="/">Rate Comparison</a>
            <a href="/">Career</a>
          </div>
        </div>
        <div className="Policy-Container">
          <h4>LEGALS</h4>
          <div className="Policy-content">
            <a href="/">Team of service</a>
            <a href="/">Privacy Policy</a>
          </div>
          <h4>DISCLAIMER</h4>
          <p>
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </p>
        </div>
        <div className="Social-Media-Container">
          <h4>FOLLOW US</h4>
          <div className="Social-Media-row">
            <div className="SocialMedia-link">
              <a href="/">
                <Twitter />
              </a>
            </div>
            <div className="SocialMedia-link">
              <a href="/">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="Download-Container">
          <h4>COINCAP APP AVAILABLE ON</h4>
          <div className="Download-button-Container">
            <div className="Download-Button">
              <img src={googleplaylogo} alt="googlestore" />
            </div>
            <div className="Download-Button">
              <img src={appstorelogo} alt="applestore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
