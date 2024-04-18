import React from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon
import "./Index.css";

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <div className="input-wrapper">
        <button className="search-button">
          <AiOutlineSearch size={20} />
        </button>
        <input
          className="search-input-field"
          placeholder="Search for anything"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchInput;
