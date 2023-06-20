import React, { useContext } from "react";
import Banner from "../Banner/Banner";

function PerferenceHeader() {
  //   const { filters, updateFilter } = useContext(HistoryFilterContext);

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     // if (!filters.date || !filters.search) {
  //     //   alert("Please select a date and enter a search query.");
  //     //   return;
  //     // }
  //     console.log(filters);
  //     // Do something with the query...
  //   };
  return (
    <div className="header-container" onSubmit>
      <Banner pageName="Perference" />
      <form className="form-container">
        <div className="search-container">
          {/* Search input */}
          <input
            type="search"
            id="search-input"
            className="input" // Add the new class here
          />
        </div>
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default PerferenceHeader;
