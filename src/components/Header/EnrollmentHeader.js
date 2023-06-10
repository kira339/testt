import React, { useContext } from "react";
// IMPORT Banner and EnrollmentFilterContext
import Banner from "../Banner/Banner";
import { EnrollmentFilterContext } from "../../utils/EnrollmentFilterContext";

function EnrollmentHeader() {
  const { filters, setFilters } = useContext(EnrollmentFilterContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!filters.search) {
      alert("Please enter a search query.");
      return;
    }
    console.log(filters);
    // Do something with the query...
  };

  return (
    <div className="enrollment-header">
      <Banner pageName="Enrollment" />

      <form className="form-container" onSubmit={handleSearch}>
        <div className="search-container">
          {/* Search input */}
          <input
            type="search"
            id="search-input"
            className="input" // Add the new class here
            placeholder={`Search ${filters.category}`}
            required
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />

          {/* Search button */}
          <button type="submit" className="button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentHeader;
