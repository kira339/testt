import React, { useState, useEffect } from "react";
import EnrollmentHeader from "../components/Header/EnrollmentHeader";
import EnrollmentDashboard from "../components/Dashboard/EnrollmentDashboard";
import { EnrollmentData } from "../DB/EnrollmentData";
import { EnrollmentFilterProvider } from "../utils/EnrollmentFilterContext";
import { fetchEnrollment } from "../utils/API";
import Banner from "../components/Banner/Banner";

function Enrollment() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(EnrollmentData);

  const handleSearch = () => {
    const filtered = EnrollmentData.filter((row) =>
      Object.values(row).some((val) => val.toString().includes(searchInput))
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchEnrollment(searchInput).then((response) => {
      console.log(response.data);
    });
  }, [searchInput]);

  return (
    <EnrollmentFilterProvider>
      <div className="enrollment">
        <Banner pageName="enrollment" />

        <EnrollmentHeader
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
        />
        <EnrollmentDashboard data={filteredData} />
      </div>
    </EnrollmentFilterProvider>
  );
}

export default Enrollment;
