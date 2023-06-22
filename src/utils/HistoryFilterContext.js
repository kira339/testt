import React from "react";
import { createContext, useContext, useState } from "react";
export const HistoryFilterContext = createContext();
export const useHistoryContext = () => useContext(HistoryFilterContext);

export const HistoryFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  });

  function updateFilter(newFilters) {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }

  return (
    <HistoryFilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </HistoryFilterContext.Provider>
  );
};
