import React from "react";

function PerferenceItem({ title, description }) {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="dashboard-item">
      <div className="dashboard-item-info">
        <h2 className="dashboard-item-title">{title}</h2>
        <p className="dashboard-item-description">{description}</p>
      </div>
      <div className="dashboard-item-toggle">
        <label className="switch">
          <input type="checkbox" checked={toggle} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default PerferenceItem;
