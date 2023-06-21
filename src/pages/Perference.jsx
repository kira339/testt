// import React from "react";
// import PerferenceHeader from "../components/Header/PerferenceHeader";
// import PerferenceDashboard from "../components/Dashboard/PerferenceDashboard";
// import { PreferenceProvider } from "../utils/PreferenceContext";

// export default function Perference() {
//   return (
//     <PreferenceProvider>
//       <div className="perference">
//         <PerferenceHeader />
//         <PerferenceDashboard />
//       </div>
//     </PreferenceProvider>
//   );
// }
import React from "react";
import PerferenceHeader from "../components/Header/PerferenceHeader";
import PerferenceDashboard from "../components/Dashboard/PerferenceDashboard";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import PerferenceItem from "../components/Item/PerferenceItem";
import { PreferenceProvider } from "../utils/PreferenceContext";

export default function Perference() {
  return (
    <PreferenceProvider>
      <div className="perference">
        <PerferenceHeader />
        <PerferenceDashboard>
          <DashboardHeader />
          <PerferenceItem />
          <PerferenceItem />
          <PerferenceItem />
        </PerferenceDashboard>
      </div>
    </PreferenceProvider>
  );
}
