// pages/Enrollment.jsx
import React from "react";
import EnrollmentHeader from "../components/EnrollmentHeader";
import EnrollmentDashboard from "../components/EnrollmentDashboard";
import EnrollmentTable from "../components/EnrollmentTable";

function Enrollment() {
  return (
    <div className="enrollment">
      <EnrollmentHeader />
      <EnrollmentDashboard />
      <EnrollmentTable />
    </div>
  );
}

export default Enrollment;
