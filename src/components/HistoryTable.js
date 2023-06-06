import React from "react";

export default function HistoryTable(props) {
  return (
    <tr className="table-row">
      <td className="table-cell">{props.account}</td>
      <td className="table-cell">{props.contact}</td>
      <td className="table-cell">{props.alertType}</td>
      <td className="table-cell">{props.deliveryMethod}</td>
      <td className="table-cell">{props.dateTime}</td>
      <td className="table-cell">{props.deliveryStatus}</td>
      <td className="table-cell">{props.actualMessage}</td>
    </tr>
  );
}
