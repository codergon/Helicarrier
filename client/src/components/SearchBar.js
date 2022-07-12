import React from "react";

const SearchBar = ({ searchInput, setSearchInput, refetchList }) => {
  return (
    <div className="search_bar">
      <input
        type="text"
        value={searchInput}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            refetchList();
          }
        }}
        placeholder="Search transactions by Asset | Type | Status | Platform"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={refetchList}>
        <i className="ph-magnifying-glass-fill" />
      </button>
    </div>
  );
};

export default SearchBar;
