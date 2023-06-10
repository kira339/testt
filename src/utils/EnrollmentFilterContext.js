import { createContext } from "react";

export const EnrollmentFilterContext = createContext({
  filters: {
    search: "",
  },
  setFilters: () => {},
});
