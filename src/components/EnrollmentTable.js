import React from "react";

function EnrollmentTable({ data }) {
  return (
    <div className="enrollment-table">
      <table className="table">
        {/* Table header */}
        <thead>
          <tr>
            <th className="enrollment-table-header-cell">Column 1</th>
            <th className="enrollment-table-header-cell">Column 2</th>
            <th className="enrollment-table-header-cell">Column 3</th>
            <th className="enrollment-table-header-cell">Column 4</th>
            <th className="enrollment-table-header-cell">Column 5</th>
            <th className="enrollment-table-header-cell">Column 6</th>
            <th className="enrollment-table-header-cell">Column 7</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="enrollment-table-row">
              <td className="enrollment-table-cell">{row.column1}</td>
              <td className="enrollment-table-cell">{row.column2}</td>
              <td className="enrollment-table-cell">{row.column3}</td>
              <td className="enrollment-table-cell">{row.column4}</td>
              <td className="enrollment-table-cell">{row.column5}</td>
              <td className="enrollment-table-cell">{row.column6}</td>
              <td className="enrollment-table-cell">{row.column7}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentTable;
