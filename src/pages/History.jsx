// pages/History.jsx
import React, { useState, useEffect } from "react";
// import HistoryHeader from "../components/HistoryHeader";
// import HistoryDashboard from "../components/HistoryDashboard";
// import { fetchHistory } from "../utils/API";
import HistoryHeader from "../components/Header/HistoryHeader";
import HistoryDashboard from "../components/Dashboard/HistoryDashboard";
import { fetchHistory } from "../utils/API";

export default function History() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchHistory(filters)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, [filters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="history">
      <HistoryHeader onSearch={setFilters} />
      {data ? (
        <HistoryDashboard filters={filters} data={data} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}
