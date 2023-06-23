import React from "react";
import PerferenceItem from "../Item/PerferenceItem";
import { PerferenceData } from "../../DB/PerferenceData";

function PerferenceDashboard() {
  return (
    <div className="dashboard-container">
      {PerferenceData.map((item, index) => (
        <PerferenceItem key={index} {...item} />
      ))}
    </div>
  );
}

export default PerferenceDashboard;
