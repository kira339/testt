// pages/History.jsx
import React, { useState, useEffect } from "react";

// import ReportsDashboard
import ReportsDashboard from "../components/Dashboard/ReportsDashboard";
// import ReportsHeader
import ReportsHeader from "../components/Header/ReportsHeader";
// import fetchReports
import { fetchReports } from "../utils/API";

export default function Reports() {
  return (
    <div>
      <ReportsHeader />
      <ReportsDashboard />
    </div>
  );
}
