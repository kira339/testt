import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Plus from "../../assets/plus.png";
import Minus from "../../assets/minus.png";
import Gear from "../../assets/gear.png";
function PerferenceHeader({}) {
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  return (
    <div className="header-container">
      <Banner pageName="Perference" />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="search"
            id="search-input"
            className="input"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="dashboard-header">
        <img src={Gear} />
        {/* Replace with actual gear icon */}
        <select>
          <option>Option 1</option> {/* Replace with actual options */}
          <option>Option 2</option>
        </select>
        <img src={Plus} />
        {/* Replace with actual plus icon */}
      </div>
    </div>
  );
}

export default PerferenceHeader;
