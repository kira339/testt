import React from "react";

function EnrollmentTable({ data }) {
  return (
    <div className="enrollment-table">
      <table className="table">
        {/* Table header */}
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="enrollment-table-row">
              {/* Table cells */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentTable;
