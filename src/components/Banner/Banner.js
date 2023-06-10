import React, { useContext } from "react";
//IMPORT EnrollmentFilterContext from util
import { EnrollmentFilterContext } from "../../utils/EnrollmentFilterContext";

function Banner({ pageName }) {
  const { filters } = useContext(EnrollmentFilterContext);

  return (
    <div className="header-container bg-orange-500">
      <h1 className="header-title text-white ">{pageName}</h1>
      <h2 className="header-subtitle text-white text-2xl">
        Search Query: {filters.search}
      </h2>
    </div>
  );
}

export default Banner;
