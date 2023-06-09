import React, { useState } from "react";
import EnrollmentHeader from "../components/EnrollmentHeader";
import EnrollmentDashboard from "../components/EnrollmentDashboard";
import EnrollmentTable from "../components/EnrollmentTable";
import { EnrollmentData } from "../DB/EnrollmentData";

function Enrollment() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(EnrollmentData);

  const handleSearch = () => {
    const filtered = EnrollmentData.filter((row) =>
      Object.values(row).some((val) => val.toString().includes(searchInput))
    );
    setFilteredData(filtered);
  };

  return (
    <div className="enrollment">
      <EnrollmentHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <EnrollmentDashboard />
      <EnrollmentTable data={filteredData} />
    </div>
  );
}

export default Enrollment;
