import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/history" className="navbar__link">
            History
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/enrollment" className="navbar__link">
            Enrollment
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/preference" className="navbar__link">
            Preference
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/reports" className="navbar__link">
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
