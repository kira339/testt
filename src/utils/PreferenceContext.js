// utils/PreferenceContext.js
import React, { createContext, useState, useEffect } from "react";
import { fetchPreferences } from "./API";

export const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <PreferenceContext.Provider
      value={{ preferences, isLoading, error, updateAccountNumber }}
    >
      {children}
    </PreferenceContext.Provider>
  );
};
