import React from "react";
import HistoryTable from "./HistoryTable";
export default function HistoryDashboard() {
  // This is the data that will be displayed in the table
  // We will map over this array and display each object as a row in the table
  // The keys of the object will be the column headers
  // The values of the object will be the data in each column
  // The order of the keys in the object will determine the order of the columns
  // The order of the objects in the array will determine the order of the rows
  //We refactor the td data to be dynamic based off the search button
  const tableData = [
    {
      account: "007200685801",
      contact: "10000000",
      alertType: "Registration_Confirmation",
      deliveryMethod: "SMS",
      dateTime: "03/20/2023 11:28:25 AM",
      deliveryStatus: "Bounce",
      actualMessage:
        "PSE&G: Text Y to activate your registration for the account at Franklin Ave. Msg&Data rates may apply. Text Stop to cancel, HELP for help",
    },
    {
      account: "007200685802",
      contact: "10000001",
      alertType: "Password_Reset",
      deliveryMethod: "Email",
      dateTime: "03/21/2023 10:15:00 AM",
      deliveryStatus: "Sent",
      actualMessage:
        "Hello, please use this link to reset your password: www.example.com/reset",
    },
    {
      account: "007200685803",
      contact: "10000002",
      alertType: "Billing_Notification",
      deliveryMethod: "Phone",
      dateTime: "03/22/2023 1:30:45 PM",
      deliveryStatus: "Delivered",
      actualMessage:
        "Your account is overdue. Please pay your balance immediately to avoid service interruption.",
    },
    {
      account: "007200685804",
      contact: "10000003",
      alertType: "Appointment_Reminder",
      deliveryMethod: "SMS",
      dateTime: "03/23/2023 4:45:10 PM",
      deliveryStatus: "Delivered",
      actualMessage:
        "Reminder: Your appointment with Dr. Smith is tomorrow at 9:00 AM. Please arrive 15 minutes early.",
    },
  ];

  return (
    <div className="flex-1 p-4 flex items-center justify-center bg-color3">
      <div className="bg-color2 shadow-md rounded-lg p-6 w-full">
        <h2 className="text-2xl font-bold mb-4 text-color1"> Report</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="bg-gray-100 p-2 text-color4">Accountio</th>
                <th className="bg-gray-100 p-2 text-color4">Contactly</th>
                <th className="bg-gray-100 p-2 text-color4">Alpha Tango</th>
                <th className="bg-gray-100 p-2 text-color4">Delivero Metho</th>
                <th className="bg-gray-100 p-2 text-color4">Dateo/Timi</th>
                <th className="bg-gray-100 p-2 text-color4">Delv Staty</th>
                <th className="bg-gray-100 p-2 text-color4">Act MesGne</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <HistoryTable key={index} {...data} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
