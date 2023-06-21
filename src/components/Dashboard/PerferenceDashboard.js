// import React from "react";
// import Plus from "../../assets/plus.png";
// import Minus from "../../assets/minus.png";
// import Gear from "../../assets/gear.png";

// export default function PerferenceDashboard() {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <h2 className="dashboard-title"> Perference</h2>
//         {/*  */}
//         <div>
//           <img src={Plus} />
//         </div>
//       </div>
//     </div>
//   );
// }
// PerferenceDashboard.js
// import React, { useContext } from "react";
// import { PreferenceContext } from "../../utils/PreferenceContext";
// import PerferenceItem from "../Item/PerferenceItem";

// export default function PerferenceDashboard() {
//   const { preferences, isLoading, error } = useContext(PreferenceContext);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Perference</h2>
//       {preferences.map((item, index) => (
//         <PerferenceItem
//           key={index}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// }
import React, { useContext } from "react";
import { PreferenceContext } from "../../utils/PreferenceContext";
import PerferenceItem from "../Item/PerferenceItem";

export default function PreferenceDashboard() {
  const { preferences, isLoading, error } = useContext(PreferenceContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-icon">Gear</div>
        <select className="dashboard-header-dropdown">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className="dashboard-header-icon">Plus</div>
      </div>
      <div className="dashboard-alert">This is an alert message.</div>
      <h2 className="dashboard-title">Preference</h2>
      {preferences.map((item, index) => (
        <PerferenceItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
