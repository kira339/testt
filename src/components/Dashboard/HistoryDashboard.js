import React from "react";
import HistoryTable from "../Table/HistoryTable";
import { HistoryData } from "../../DB/HistoryData";

export default function HistoryDashboard({ filters }) {
  const filteredData = HistoryData.filter((data) => {
    // Filter by account
    if (filters.category === "account_DD" && data.account !== filters.search) {
      return false;
    }

    // Filter by contact
    if (filters.category === "contact_DD" && data.contact !== filters.search) {
      return false;
    }

    // Filter by alert type
    if (
      filters.category === "alertType_DD" &&
      data.alertType !== filters.search
    ) {
      return false;
    }

    // Filter by delivery method
    if (
      filters.category === "deliveryMethod_DD" &&
      data.deliveryMethod !== filters.search
    ) {
      return false;
    }

    // Filter by delivery status
    if (
      filters.category === "deliveryStatus_DD" &&
      data.deliveryStatus !== filters.search
    ) {
      return false;
    }

    // If none of the conditions matched, include the data in the filtered array
    return true;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2 className="dashboard-title"> Report</h2>
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
              {filteredData.map((data, index) => (
                <HistoryTable key={index} {...data} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
