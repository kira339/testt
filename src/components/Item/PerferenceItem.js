// PerferenceItem.js
import React, { useState, useEffect } from "react";
import { updatePreference } from "../../utils/API";

function PerferenceItem({ title, description }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    updatePreference(title, isToggled)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isToggled]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="preference-item">
      <h3 className="item-title">{title}</h3>
      <p className="item-description">{description}</p>
      <button onClick={handleToggle}>{isToggled ? "On" : "Off"}</button>
    </div>
  );
}

export default PerferenceItem;
