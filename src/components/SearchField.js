import React, { useState, useEffect } from "react";

const SearchField = ({ sendSearchInput }) => {
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    sendSearchInput(searchInput);
  });

  return (
    <label>
      <input
        type="search"
        placeholder="Search Robot"
        value={searchInput}
        onChange={e => {
          setsearchInput(e.target.value);
        }}
      />
    </label>
  );
};

export default SearchField;
