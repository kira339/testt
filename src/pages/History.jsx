import React from "react";
import { useState } from "react";
import HistoryHeader from "../components/HistoryHeader";
import HistoryDashboard from "../components/HistoryDashboard";
export default function History() {
  return (
    <div className="history ">
      <HistoryHeader />
      <HistoryDashboard />
    </div>
  );
}
