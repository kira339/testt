import React from "react";

function EnrollmentTable({ row }) {
  return (
    <tr className="table-row">
      <td className="table-cell">{row.column1}</td>
      <td className="table-cell">{row.column2}</td>
      <td className="table-cell">{row.column3}</td>
      <td className="table-cell">{row.column4}</td>
      <td className="table-cell">{row.column5}</td>
      <td className="table-cell">{row.column6}</td>
      <td className="table-cell">{row.column7}</td>
    </tr>
  );
}

export default EnrollmentTable;
