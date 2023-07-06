import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import { EnrollmentFilterContext } from "../../utils/EnrollmentFilterContext";

function EnrollmentHeader({ searchInput, setSearchInput, handleSearch }) {
  const { filters, setFilters } = useContext(EnrollmentFilterContext);

  return (
    <div className="enrollment-header">
      <Banner pageName="Enrollment" />

      <form className="form-container" onSubmit={handleSearch}>
        <div className="search-container">
          <input
            type="search"
            id="search-input"
            className="input"
            required
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button type="submit" className="button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentHeader;
