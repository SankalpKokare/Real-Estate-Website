import React from "react";
import { HiLocationMarker } from "react-icons/hi";
function SearchBar() {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
      <input type="text" name="" id="" />
      <button className="button">Search</button>
    </div>
  );
}

export default SearchBar;
