import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Properties.css";

function Properties() {
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default Properties;
