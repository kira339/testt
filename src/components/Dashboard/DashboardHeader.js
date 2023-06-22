import React from "react";
import Plus from "../../assets/plus.png";
import Minus from "../../assets/minus.png";
import Gear from "../../assets/gear.png";
const DashboardHeader = ({}) => {
  return (
    // <div className="dashboard-container">
    <div className="dashboard-header">
      <div className="dashboard-header-icon">
        {" "}
        <img src={Gear} />
      </div>
      <select className="dashboard-header-dropdown">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className="dashboard-header-icon">
        <img src={Plus} />
      </div>
      {/* </div> */}
      <div className="dashboard-alert">This is an alert message.</div>
    </div>
  );
};

export default DashboardHeader;
