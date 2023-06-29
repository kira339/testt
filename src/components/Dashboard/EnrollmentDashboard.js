import React from "react";
import EnrollmentTable from "../Table/EnrollmentTable";

function EnrollmentDashboard({ data }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2 className="dashboard-title">Enrollment Dashboard</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-header-cell">Contact</th>
                <th className="table-header-cell">Principal</th>
                <th className="table-header-cell">Source</th>
                <th className="table-header-cell">Action</th>
                <th className="table-header-cell">Channel</th>
                <th className="table-header-cell">Program</th>
                <th className="table-header-cell">Created</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <EnrollmentTable key={index} {...item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentDashboard;
