import React, { useState, useEffect } from "react";

const SearchField = ({ sendSearchInput }) => {
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    sendSearchInput(searchInput);
  });

  return (
    <div>
      <input
        type="search"
        placeholder="Search Robot"
        value={searchInput}
        onChange={e => {
          setsearchInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchField;
