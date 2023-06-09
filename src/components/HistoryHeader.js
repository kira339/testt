import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HistoryFilterContext } from "../utils/HistoryFilterContext";
import Banner from "./Banner";

export default function HistoryHeader() {
  const { filters, setFilters } = useContext(HistoryFilterContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!filters.date || !filters.search) {
      alert("Please select a date and enter a search query.");
      return;
    }
    console.log(filters);
    // Do something with the query...
  };

  return (
    <div className="header-container">
      <Banner pageName="History" />

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

          {/* Category dropdown */}
          <select
            id="category-dropdown"
            className="dropdown"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="account_DD">Account</option>
            <option value="contact_DD">Contact</option>
            <option value="alertType_DD">Alert Type</option>
            <option value="deliveryMethod_DD">Delivery Method</option>
            <option value="deliveryStatus_DD">Delivery Status</option>
          </select>

          {/* Search button */}
          <button type="submit" className="button">
            Search
          </button>
        </div>

        {/* Date picker */}
        <div>
          <DatePicker
            selected={filters.date}
            onChange={(date) => setFilters({ ...filters, date })}
            className="datepicker-input" // Add the new class here
          />
        </div>

        {/* Download button */}
        <div>
          <button type="submit" className="button">
            Download
          </button>
        </div>
      </form>

      <h2 className="header-title">
        Search Query: {filters.search}, Number of Records: {filters.recordCount}
      </h2>
    </div>
  );
}
