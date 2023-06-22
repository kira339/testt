import React, { createContext, useState } from "react";

export const EnrollmentFilterContext = createContext();

export const EnrollmentFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    search: "",
  });

  return (
    <EnrollmentFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </EnrollmentFilterContext.Provider>
  );
};
