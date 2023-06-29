import React from "react";

function EnrollmentTable({
  contact,
  principal,
  source,
  action,
  channel,
  program,
  created,
}) {
  return (
    <tr className="table-row">
      <td className="table-cell">{contact}</td>
      <td className="table-cell">{principal}</td>
      <td className="table-cell">{source}</td>
      <td className="table-cell">{action}</td>
      <td className="table-cell">{channel}</td>
      <td className="table-cell">{program}</td>
      <td className="table-cell">{created}</td>
    </tr>
  );
}

export default EnrollmentTable;
