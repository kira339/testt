import React, { useState } from "react";

const EnrollmentHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="enrollment-header">
      <h1>Enrollments</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default EnrollmentHeader;
