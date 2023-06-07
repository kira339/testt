import React, { useState } from "react";
import { HistoryFilterContext } from "./utils/HistoryFilterContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import History from "./pages/History/History";
import Enrollment from "./pages/Enrollment/Enrollment";
import Reports from "./pages/Reports/Reports";
import Perference from "./pages/Perference/Perference";

function App() {
  const [filters, setFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  });

  return (
    <HistoryFilterContext.Provider value={{ filters, setFilters }}>
      <div className="flex mainC">
        <Navbar />
        <Routes>
          <Route path="/" element={<History />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/Enrollment" element={<Enrollment />}></Route>
          <Route path="/Reports" element={<Reports />}></Route>
          <Route path="/Perference" element={<Perference />}></Route>
        </Routes>
      </div>
    </HistoryFilterContext.Provider>
  );
}

export default App;
