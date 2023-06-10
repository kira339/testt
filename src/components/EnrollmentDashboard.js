import React from "react";
import EnrollmentTable from "./EnrollmentTable";

function EnrollmentDashboard({ data }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Enrollment Dashboard</h1>
        <div className="table-container">
          <EnrollmentTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default EnrollmentDashboard;
