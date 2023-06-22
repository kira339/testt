import React, { useContext } from "react";
import { EnrollmentFilterContext } from "../../utils/EnrollmentFilterContext";
import { HistoryFilterContext } from "../../utils/HistoryFilterContext";
import { PreferenceFilterContext } from "../../utils/PreferenceFilterContext";

function Banner({ pageName }) {
  const enrollmentFilters = useContext(EnrollmentFilterContext);
  const historyFilters = useContext(HistoryFilterContext);
  const preferenceFilters = useContext(PreferenceFilterContext);

  let filters;
  if (pageName === "Enrollment") {
    filters = enrollmentFilters;
  } else if (pageName === "History") {
    filters = historyFilters;
  } else if (pageName === "Preference") {
    filters = preferenceFilters;
  }

  return (
    <div className="header-container bg-orange-500">
      <h1 className="header-title text-white ">{pageName}</h1>
      <h2 className="header-subtitle text-white text-2xl">
        Search Query: {filters && filters.search}
      </h2>
    </div>
  );
}

export default Banner;
