import React, { useState } from "react";
import { HistoryFilterContext } from "./utils/HistoryFilterContext";
import { EnrollmentFilterContext } from "./utils/EnrollmentFilterContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import History from "./pages/History";
import Enrollment from "./pages/Enrollment";
import Reports from "./pages/Reports";
import Perference from "./pages/Perference";

function App() {
  const [historyFilters, setHistoryFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  });

  const [enrollmentFilters, setEnrollmentFilters] = useState({
    category: "All categories",
    search: "",
    date: new Date(),
    recordCount: 0,
  });

  return (
    <HistoryFilterContext.Provider
      value={{ filters: historyFilters, setFilters: setHistoryFilters }}
    >
      <EnrollmentFilterContext.Provider
        value={{ filters: enrollmentFilters, setFilters: setEnrollmentFilters }}
      >
        <div className="flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<History />}></Route>
            <Route path="/History" element={<History />}></Route>
            <Route path="/Enroll" element={<Enrollment />}></Route>
            <Route path="/Reports" element={<Reports />}></Route>
            <Route path="/Perference" element={<Perference />}></Route>
          </Routes>
        </div>
      </EnrollmentFilterContext.Provider>
    </HistoryFilterContext.Provider>
  );
}

export default App;
