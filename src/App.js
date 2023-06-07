import React, { useState } from "react";
import { HistoryFilterContext } from "./utils/HistoryFilterContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import History from "./pages/History/History";
import Enrollment from "./pages/Enrollment/Enrollment";
import Reports from "./pages/Reports/Reports";
import Perference from "./pages/Perference/Perference";
import "./index.css";

function App() {
  const [filters, setFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  });

  return (
    <HistoryFilterContext.Provider value={{ filters, setFilters }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<History />} />
          <Route path="/history" element={<History />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/perference" element={<Perference />} />
        </Routes>
      </div>
    </HistoryFilterContext.Provider>
  );
}

export default App;
