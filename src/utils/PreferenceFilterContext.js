import React, { createContext, useState, useEffect } from "react";
import { fetchPreferences } from "./API";

export const PreferenceFilterContext = createContext();

export const PreferenceFilterProvider = ({ children }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const filters = { accountNumber };

  const updateAccountNumber = (newAccountNumber) => {
    setAccountNumber(newAccountNumber);
  };

  useEffect(() => {
    if (accountNumber) {
      setIsLoading(true);
      setError(null);
      fetchPreferences(accountNumber)
        .then((response) => {
          setPreferences(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [accountNumber]);

  return (
    <PreferenceFilterContext.Provider
      value={{ preferences, isLoading, error, filters, updateAccountNumber }}
    >
      {children}
    </PreferenceFilterContext.Provider>
  );
};
