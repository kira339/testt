import React from "react";
import PerferenceHeader from "../components/Header/PerferenceHeader";
import PerferenceDashboard from "../components/Dashboard/PerferenceDashboard";
import { PreferenceFilterProvider } from "../utils/PreferenceFilterContext";
function Perference() {
  return (
    <PreferenceFilterProvider>
      <div className="perference">
        <PerferenceHeader />
        <PerferenceDashboard />
      </div>
    </PreferenceFilterProvider>
  );
}

export default Perference;
