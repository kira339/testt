import React from "react";

export default function HistoryTable(props) {
  return (
    <>
      <tr className="border-t ">
        <td className="p-2 text-color4">{props.account}</td>
        <td className="p-2 text-color4">{props.contact}</td>
        <td className="p-2 text-color4">{props.alertType}</td>
        <td className="p-2 text-color4">{props.deliveryMethod}</td>
        <td className="p-2 text-color4">{props.dateTime}</td>
        <td className="p-2 text-color4">{props.deliveryStatus}</td>
        <td className="p-2 text-color4">{props.actualMessage}</td>
      </tr>
    </>
  );
}
