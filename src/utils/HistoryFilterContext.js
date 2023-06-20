import React from "react";
import { createContext, useContext, useState } from "react";
export const HistoryFilterContext = createContext();
export const useHistoryContext = () => useContext(HistoryFilterContext);
// export const HistoryFilterProvider = createContext({
//   filters: {
//     category: "All categories",
//     search: "",
//     date: new Date(),
//     recordCount: 0,
//   },
//   setFilters: () => {},
// });

export const HistoryFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,

    // setFilters: () => {},
  });

  const updateFilter = (filter) => {
    // console.log(emailInput);
    setFilters({ filter });
  };

  return (
    <HistoryFilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </HistoryFilterContext.Provider>
  );
};
//   return (
//     <HistoryFilterContext.Provider
//       value={{ currentUser: currentUser }}
//       {...props}
//     />
//   );
// };
