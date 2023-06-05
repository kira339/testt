import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../index.css";

export default function HistoryHeader() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [recordCount, setRecordCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const handleSearch = (e) => {
    e.preventDefault();
    if (!startDate || !searchQuery) {
      alert("Please select a date and enter a search query.");
      return;
    }
    const query = {
      category: selectedCategory,
      date: startDate,
      search: searchQuery,
    };
    console.log(query);
    // Do something with the query...
  };

  return (
    <div className="header-container">
      <h2 className="header-title">
        Search Query: {searchQuery}, Number of Records: {recordCount}
      </h2>

      <form className="form-container" onSubmit={handleSearch}>
        {/* Category dropdown */}
        <div className="dropdown-container">
          <select
            id="category-dropdown"
            className="dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="account_DD">Account</option>
            <option value="contact_DD">Contact</option>
            <option value="alertType_DD">Alert Type</option>
            <option value="deliveryMethod_DD">Delivery Method</option>
            <option value="deliveryStatus_DD">Delivery Status</option>
          </select>
        </div>

        {/* Search input */}
        <div className="input-container">
          <input
            type="search"
            id="search-input"
            className="input"
            placeholder={`Search ${selectedCategory}`}
            required
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Search button */}
        <div className="button-container">
          <button type="submit" className="button">
            <svg
              aria-hidden="true"
              className="svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 00 7 7a7 7 0 007-7z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>

        {/* Date picker */}
        <div className="input-container">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input"
          />
        </div>

        {/* Download button */}
        <div className="button-container">
          <button type="submit" className="button">
            Download
          </button>
        </div>
      </form>
    </div>
  );
}
