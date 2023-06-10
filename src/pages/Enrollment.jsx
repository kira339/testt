import React, { useState, useEffect, useContext } from "react";
import EnrollmentHeader from "../components/EnrollmentHeader";
import EnrollmentDashboard from "../components/EnrollmentDashboard";
import { EnrollmentData } from "../DB/EnrollmentData";
import { EnrollmentFilterContext } from "../utils/EnrollmentFilterContext";
import { fetchEnrollment } from "../utils/API";

function Enrollment() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(EnrollmentData);
  const { filters, setFilters } = useContext(EnrollmentFilterContext);

  const handleSearch = () => {
    const filtered = EnrollmentData.filter((row) =>
      Object.values(row).some((val) => val.toString().includes(searchInput))
    );
    setFilteredData(filtered);
    setFilters({ ...filters, search: searchInput });
  };

  useEffect(() => {
    fetchEnrollment(filters).then((response) => {
      console.log(response.data);
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
