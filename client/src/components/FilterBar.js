import React, { useState } from "react";
import { filterList, filterOptions } from "../utils";

const FilterBar = ({ refetch }) => {
  const [filterType, setFilterType] = useState("type");
  const [currentOption, setCurrentOption] = useState("");

  return (
    <div className="filter_bar">
      <div className="filter_type">
        {filterList?.map((item, index) => (
          <div
            key={index}
            className={`row_item ${item === filterType ? "active" : ""}`}
            onClick={() => setFilterType(item)}
          >
            <p>{item}</p>
            <i className="ph-caret-left-fill"></i>
          </div>
        ))}
      </div>

      <div className="filter_options">
        {filterOptions[filterType]?.map((item, index) => (
          <div
            key={index}
            className={`row_item ${item === currentOption ? "active" : ""}`}
            onClick={() => {
              const option = item !== currentOption ? item : "";
              setCurrentOption(option);
              refetch({
                filter: option,
              });
            }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
