import { createContext } from "react";

export const ReportsFilterContext = createContext({
  filters: {
    search: "",
  },
  setFilters: () => {},
});
