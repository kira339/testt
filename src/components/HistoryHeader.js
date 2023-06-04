import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    <div className="bg-primaryGray flex flex-col gap-4 p-8 items-center">
      <h2 className="text-2xl font-bold mb-4 w-full text-center text-primaryBlack">
        Search Query: {searchQuery}, Number of Records: {recordCount}
      </h2>

      <form
        className="flex flex-wrap items-center justify-center space-x-4 w-full bg-primaryWhite"
        onSubmit={handleSearch}
      >
        {/* Category dropdown */}
        <div className="relative w-full md:w-1/6 my-2 md:my-0">
          <select
            id="category-dropdown"
            className="block w-full py-2.5 px-4 text-sm text-primaryBlack bg-primaryWhite border border-primaryBlack rounded-l-lg hover:border-primaryBlue focus:ring-primaryBlue focus:border-primaryBlue dark:bg-lightGray dark:border-primaryGray dark:placeholder-lightGray dark:text-primaryWhite dark:focus:border-primaryBlue appearance-none"
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
        <div className="relative w-full md:w-1/6 my-2 md:my-0 md:ml-2">
          <input
            type="search"
            id="search-input"
            className="block p-2.5 w-full z-20 text-sm text-primaryBlack bg-primaryWhite border border-primaryBlack rounded-r-lg hover:border-primaryBlue focus:ring-primaryBlue focus:border-primaryBlue dark:bg-lightGray dark:border-primaryGray dark:placeholder-lightGray dark:text-primaryWhite dark:focus:border-primaryBlue"
            placeholder={`Search ${selectedCategory}`}
            required
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Search button */}
        <div className="w-full md:w-auto my-2 md:my-0 md:ml-2">
          <button
            type="submit"
            className="bg-primaryBlue hover:bg-primaryOrange text-primaryWhite font-bold py-2 px-4 rounded flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
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
        <div className="w-full md:w-1/6 my-2 md:my-0 md:ml-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="block w-full py-2.5 px-4 text-sm text-primaryBlack bg-primaryWhite border border-primaryBlack rounded-l-lg hover:border-primaryBlue focus:ring-primaryBlue focus:border-primaryBlue dark:bg-lightGray dark:border-primaryGray dark:placeholder-lightGray dark:text-primaryWhite dark:focus:border-primaryBlue appearance-none"
          />
        </div>

        {/* Download button */}
        <div className="w-full md:w-auto my-2 md:my-0 md:ml-2">
          <button
            type="submit"
            className="bg-primaryBlue hover:bg-primaryOrange text-primaryWhite font-bold py-2 px-4 rounded"
          >
            Download
          </button>
        </div>
      </form>
    </div>
  );
}
