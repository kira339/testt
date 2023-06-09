import React from "react";

function EnrollmentHeader({ searchInput, setSearchInput, handleSearch }) {
  return (
    <div className="enrollment-header">
      <h1>Enrollments</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default EnrollmentHeader;
