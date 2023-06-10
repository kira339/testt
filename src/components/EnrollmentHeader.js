import React from "react";

function EnrollmentHeader({ searchInput, setSearchInput, handleSearch }) {
  return (
    <div className="enrollment-header">
      <h1 className="header-title">Enrollment</h1>
      <div className="form-container">
        <div className="search-container">
          <input
            type="text"
            className="input"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentHeader;
