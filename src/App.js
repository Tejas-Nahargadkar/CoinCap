import React from "react";
import "./App.css";
import Footer from "./Screen/footer/Footer";
import LandingPage from "./Screen/LandingPage/LandingPage";
import Navbar from "./Screen/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
