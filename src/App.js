import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import History from "./pages/History";
import Enrollment from "./pages/Enrollment";
import Reports from "./pages/Reports";
import Perference from "./pages/Perference";
import { EnrollmentFilterProvider } from "./utils/EnrollmentFilterContext";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<History />}></Route>
        <Route path="/History" element={<History />}></Route>
        <Route
          path="/Enroll"
          element={
            <EnrollmentFilterProvider>
              <Enrollment />
            </EnrollmentFilterProvider>
          }
        ></Route>
        <Route path="/Reports" element={<Reports />}></Route>
        <Route path="/Perference" element={<Perference />}></Route>
      </Routes>
    </div>
  );
}

export default App;
