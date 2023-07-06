import React, { useState, useEffect, useContext } from "react";

import EnrollmentHeader from "../components/Header/EnrollmentHeader";
import EnrollmentDashboard from "../components/Dashboard/EnrollmentDashboard";
import { EnrollmentFilterContext } from "../utils/EnrollmentFilterContext";
import { fetchEnrollments } from "../utils/API";

function Enrollment() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { filters, setFilters } = useContext(EnrollmentFilterContext);

  const handleSearch = () => {
    setFilters({ ...filters, search: searchInput });
  };

  useEffect(() => {
    fetchEnrollments(filters).then((response) => {
      setFilteredData(response.data);
    });
  }, [filters]);

  return (
    <div className="enrollment">
      <EnrollmentHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <EnrollmentDashboard data={filteredData} />
    </div>
  );
}

export default Enrollment;
