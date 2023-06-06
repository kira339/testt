import { createContext } from "react";

export const HistoryFilterContext = createContext({
  filters: {
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  },
  setFilters: () => {},
});
