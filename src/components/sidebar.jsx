// Sidebar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaExclamationCircle,
  FaBell,
  FaFileAlt,
} from "react-icons/fa";
import "../styles/sidebar.css";
import { Profile } from "./profile.jsx";
import myImage from "../image/jassan.png";
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <Profile />
      <div className="sidebar-links">
        <Link
          to="/dashboard"
          className={`sidebar-link ${
            activeLink === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("dashboard")}
        >
          <FaChartLine className="sidebar-icon" />
          Dashboard
        </Link>
        <Link
          to="/service-risk-report"
          className={`sidebar-link ${
            activeLink === "service-risk-report" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("service-risk-report")}
        >
          <FaExclamationCircle className="sidebar-icon" />
          Service Risk Report
        </Link>
        <Link
          to="/notifications"
          className={`sidebar-link ${
            activeLink === "notifications" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("notifications")}
        >
          <FaBell className="sidebar-icon" />
          Notifications
        </Link>
        <Link
          to="/report"
          className={`sidebar-link ${activeLink === "report" ? "active" : ""}`}
          onClick={() => handleLinkClick("report")}
        >
          <FaFileAlt className="sidebar-icon" />
          Report
        </Link>
      </div>

      <img src={myImage} className="lastimg" />
    </div>
  );
};

export default Sidebar;
