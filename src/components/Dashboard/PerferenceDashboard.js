import React from "react";
import Plus from "../../assets/plus.png";
import Minus from "../../assets/minus.png";
import Gear from "../../assets/gear.png";

export default function PerferenceDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2 className="dashboard-title"> Perference</h2>
        {/*  */}
        <div>
          <img src={Plus} />
        </div>
      </div>
    </div>
  );
}
