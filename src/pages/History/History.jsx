import React, { useState } from "react";
import HistoryHeader from "../../components/Header/HistoryHeader";
import HistoryDashboard from "../../components/Dashboard/HistoryDashboard";

export default function History() {
  const [filters, setFilters] = useState({});

  return (
    <div className="history ">
      <HistoryHeader onSearch={setFilters} />
      <HistoryDashboard filters={filters} />
    </div>
  );
}
