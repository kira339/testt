import React from "react";
import { useState } from "react";

export default function HistoryHeader() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="w-11/12 mx-auto">
      {" "}
      {/* Change this line */}
      <form className="mt-8">
        <div className="flex items-center justify-center w-full">
          {" "}
          {/* And this line */}
          <label htmlFor="category-dropdown" className="sr-only">
            Category
          </label>
          <div className="relative w-44">
            <select
              id="category-dropdown"
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 appearance-none"
              value={selectedCategory}
              onChange={handleSelectCategory}
            >
              <option value="account_DD">Account</option>
              <option value="contact_DD">Contact</option>
              <option value="alertType_DD">Alert Type</option>
              <option value="deliveryMethod_DD">Delivery Method</option>
              <option value="deliveryStatus_DD">Delivery Status</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative w-2/3 ml-2">
            <input
              type="search"
              id="search-input"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder={`Search ${selectedCategory}`}
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          <div className="flex ml-4 space-x-4 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Change Date
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
