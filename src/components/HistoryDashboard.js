import React from "react";
import HistoryTable from "./HistoryTable";
import { tableData } from "../DB/historyData"; // Import your data

export default function HistoryDashboard({ filters }) {
  const filteredData = tableData.filter((data) => {
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
    <div className="flex-1 p-4 flex items-center justify-center bg-primaryGray">
      <div className="bg-primaryWhite shadow-md rounded-lg p-6 w-full">
        <h2 className="text-2xl font-bold mb-4 text-primaryBlack"> Report</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Accountio
                </th>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Contactly
                </th>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Alpha Tango
                </th>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Delivero Metho
                </th>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Dateo/Timi
                </th>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Delv Staty
                </th>
                <th className="bg-lightGray p-2 text-primaryBlack">
                  Act MesGne
                </th>
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
