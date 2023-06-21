import React from "react";
// IMPORT EnrollmentTable
import EnrollmentTable from "../Table/EnrollmentTable";

function EnrollmentDashboard({ data }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Enrollment Dashboard</h1>
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
              {data.map((key, index) => (
                <EnrollmentTable key={index} {...data} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentDashboard;

// <div className="table-container">
//   <table className="table">
//     <thead>
//       <tr className="table-header">
//         <th className="table-header-cell">Account</th>
//         <th className="table-header-cell">Contact</th>
//         <th className="table-header-cell">Alert Type</th>
//         <th className="table-header-cell">Delivery Method</th>
//         <th className="table-header-cell">Date/Time</th>
//         <th className="table-header-cell">Delivery Status</th>
//         <th className="table-header-cell">Message</th>
//       </tr>
//     </thead>
//     <tbody>
//       {filteredData.map((data, index) => (
//         <EnrollmentTable key={index} {...data} />
//       ))}
//     </tbody>
//   </table>
//   </div>

//         import React from "react";

// function EnrollmentTable({ data }) {
//   return (
//     <div className="enrollment-table">
//       <table className="table">
//         {/* Table header */}
//         <thead>
//           <tr>
//             <th className="enrollment-table-header-cell">Column 1</th>
//             <th className="enrollment-table-header-cell">Column 2</th>
//             <th className="enrollment-table-header-cell">Column 3</th>
//             <th className="enrollment-table-header-cell">Column 4</th>
//             <th className="enrollment-table-header-cell">Column 5</th>
//             <th className="enrollment-table-header-cell">Column 6</th>
//             <th className="enrollment-table-header-cell">Column 7</th>
//           </tr>
//         </thead>
//         {/* Table body */}
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} className="enrollment-table-row">
//               <td className="table-cell">{row.column1}</td>
//               <td className="table-cell">{row.column2}</td>
//               <td className="table-cell">{row.column3}</td>
//               <td className="table-cell">{row.column4}</td>
//               <td className="table-cell">{row.column5}</td>
//               <td className="table-cell">{row.column6}</td>
//               <td className="table-cell">{row.column7}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EnrollmentTable;
