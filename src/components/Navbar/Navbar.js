import React, { useState } from "react";
import { Link } from "react-router-dom";
import Enroll from "../../assets/enroll.png";
import History from "../../assets/history.png";
import Perference from "../../assets/perference.png";
import Report from "../../assets/report.png";

const navItems = [
  { title: "History", src: History },
  { title: "Perference", src: Perference },
  { title: "Reports", src: Report },
  { title: "Enroll", src: Enroll },
];

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="nav-container">
      <div className="nav-content">
        <img
          src={Enroll}
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        />
        <div className="nav-header">
          <img src="" className="nav-logo" />
          <h1 className={`nav-title ${!open && "nav-title-hidden"}`}>
            Sidirth
          </h1>
        </div>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${index === 0 && "nav-item-active"}`}
            >
              <Link to={item.title} className="nav-link">
                <img src={item.src} className="nav-icon" />
                <span className={`nav-text ${!open && "nav-text-hidden"}`}>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
