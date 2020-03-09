import React, { useState, useEffect } from "react";

const SearchField = ({ sendSearchInput }) => {
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    sendSearchInput(searchInput);
  });

  return (
    <div>
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
    </div>
  );
};

export default SearchField;
