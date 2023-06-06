import React, { useState } from "react";
import { HistoryFilterContext } from "./utils/HistoryFilterContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import Enrollment from "./pages/Enrollment";
import Reports from "./pages/Reports";
import Perference from "./pages/Perference";

function App() {
  const [filters, setFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  });

  return (
    <div className="flex mainC">
      <Navbar />
      <Routes>
        <HistoryFilterContext.Provider value={{ filters, setFilters }}>
          <Route path="/" element={<History />}></Route>
          <Route path="/History" element={<History />}></Route>
        </HistoryFilterContext.Provider>
        <Route path="/Enrollment" element={<Enrollment />}></Route>
        <Route path="/Reports" element={<Reports />}></Route>
        <Route path="/Perference" element={<Perference />}></Route>
      </Routes>
    </div>
  );
}

export default App;
