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
                <th className="table-header-cell">Account</th>
                <th className="table-header-cell">Contact</th>
                <th className="table-header-cell">Alert Type</th>
                <th className="table-header-cell">Delivery Method</th>
                <th className="table-header-cell">Date/Time</th>
                <th className="table-header-cell">Delivery Status</th>
                <th className="table-header-cell">Message</th>
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
