import React, { useState } from "react";
import HistoryHeader from "../components/HistoryHeader";
import HistoryDashboard from "../components/HistoryDashboard";

export default function History() {
  const [filters, setFilters] = useState({});

  return (
    <div className="history ">
      <HistoryHeader onSearch={setFilters} />
      <HistoryDashboard filters={filters} />
    </div>
  );
}
