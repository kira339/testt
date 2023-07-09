import React, { useContext, useState } from "react";
import EnrollmentHeader from "../components/Header/EnrollmentHeader";
import EnrollmentDashboard from "../components/Dashboard/EnrollmentDashboard";
import { EnrollmentFilterContext } from "../utils/EnrollmentFilterContext";
import { fetchEnrollments } from "../utils/API";

function EnrollmentContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { filters, setFilters } = useContext(EnrollmentFilterContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchEnrollments(searchInput).then((data) => {
      setFilteredData(data);
    });
  };

  return (
    <>
      <EnrollmentHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <EnrollmentDashboard data={filteredData} />
    </>
  );
}

export default EnrollmentContainer;
