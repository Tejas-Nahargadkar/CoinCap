import React from "react";
import "./Navbar.css";
import NavLogo from "../../Asset/Logo.svg";
import { Settings } from "@mui/icons-material";
import SearchInput from "../../components/SearchInput/SearchInput";
export default function Navbar() {
  return (
    <div className="Navbar-Container">
      <div className="Navbar">
        <div className="Nav-links">
          <a href="hello">Coins</a>
          <a href="hello">Exchanges</a>
          <a href="hello">Swap</a>
        </div>
        <div className="Nav-Logo">
          <img src={NavLogo} alt="" />
        </div>
        <div className="Nav-Buttons">
          <div className="Nav-Input">
            <SearchInput />
          </div>
       
        <div className="Nav-Settings">
          <button className="Settings-button">
            <Settings />
          </button>
        </div>
        <div className="Nav-Wallet">
          <button className="Wallet-Button">Connect Wallet</button>
        </div>
        </div>
      </div>
    </div>
  );
}
