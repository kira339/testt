import React, { useState, useEffect, useContext } from "react";

import ReportsHeader from "../components/Header/ReportsHeader";
import ReportsDashboard from "../components/Dashboard/ReportsDashboard";
import { ReportsData } from "../DB/ReportsData";
import { ReportsFilterContext } from "../utils/ReportsFilterContext";
import { fetchReports } from "../utils/API";

function Reports() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(ReportsData);
  const { filters, setFilters } = useContext(ReportsFilterContext);

  const handleSearch = () => {
    const filtered = ReportsData.filter((row) =>
      Object.values(row).some((val) => val.toString().includes(searchInput))
    );
    setFilteredData(filtered);
    setFilters({ ...filters, search: searchInput });
  };

  useEffect(() => {
    fetchReports(filters).then((response) => {
      console.log(response.data);
    });
  }, [filters]);

  return (
    <div className="reports">
      <ReportsHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <ReportsDashboard data={filteredData} />
    </div>
  );
}

export default Reports;
