import React from "react";

function EnrollmentTable(props) {
  return (
    <tr className="table-row">
      <td className="table-cell">{props.column1}</td>
      <td className="table-cell">{props.column2}</td>
      <td className="table-cell">{props.column3}</td>
      <td className="table-cell">{props.column4}</td>
      <td className="table-cell">{props.column5}</td>
      <td className="table-cell">{props.column6}</td>
      <td className="table-cell">{props.column7}</td>
    </tr>
  );
}

export default EnrollmentTable;
