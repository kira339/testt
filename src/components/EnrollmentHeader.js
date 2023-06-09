// components/EnrollmentHeader.js
import React from "react";
import Banner from "./Banner";

function EnrollmentHeader() {
  return (
    <div className="header-container">
      <Banner pageName="Enrollments" />
      <form className="form-container">
        <input
          type="search"
          id="search-input"
          className="input"
          placeholder="Search Enrollments"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default EnrollmentHeader;
