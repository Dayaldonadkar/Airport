import React from "react";
import Api from "./Api.js/Api";
import Mid from "./Homepage/Mid";
import Navbar from "./Homepage/Navbar";
import Popular from "./Homepage/Popular";

const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <Mid />
      <Popular />
    </div>
  );
};

export default Homepage;
