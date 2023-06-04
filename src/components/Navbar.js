import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Enroll from "../assets/enroll.png";
import History from "../assets/history.png";
import Perference from "../assets/perference.png";
import Report from "../assets/report.png";
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const navItem = [
    { title: "History", src: History },
    { title: "Perference", src: Perference },
    { title: "Reports", src: Report },
    { title: "Enroll", src: Enroll },
  ];
  return (
    <div>
      <div className="flex nav">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } bg-blue-400 h-screen p-5 pt-8 relative duration-300`}
        >
          <img
            src={Enroll}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-800
          border-2 rounded-full ${!open && "rotate-90"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 item-center">
            <img
              src=""
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360-degree]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Sidirth
            </h1>
          </div>
          <ul className="pt-6">
            {navItem.map((item, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer
               hover:bg-blue-700 text-gray-800 text-sm items-center gap-x-4
              ${navItem.gap ? "mt-4" : "mt-2"} ${index == 0 && "bg-blue-800"}`}
              >
                <Link to={item.title}>
                  <img src={`${item.src}`} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
