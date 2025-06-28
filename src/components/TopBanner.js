import React, {useState} from "react";
import "../styles/TopBanner.css";


const TopBanner = () => {
  return (
  <div class="top-banner">
    <button onClick={() => window.location.href='/'}>Home</button>
  </div>
  );
};

export default TopBanner;