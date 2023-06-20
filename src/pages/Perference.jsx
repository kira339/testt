import React from "react";
import PerferenceHeader from "../components/Header/PerferenceHeader";
import PerferenceDashboard from "../components/Dashboard/PerferenceDashboard";
import { PreferenceProvider } from "../utils/PreferenceContext";

export default function Perference() {
  return (
    <PreferenceProvider>
      <div className="perference">
        <PerferenceHeader />
        <PerferenceDashboard />
      </div>
    </PreferenceProvider>
  );
}
