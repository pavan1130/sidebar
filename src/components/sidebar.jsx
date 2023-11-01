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

  const links = [
    { to: "/", text: "Dashboard", icon: <FaChartLine /> },
    {
      to: "/service-risk-report",
      text: "Service Risk Report",
      icon: <FaExclamationCircle />,
    },
    { to: "/notifications", text: "Notifications", icon: <FaBell /> },
    { to: "/report", text: "Report", icon: <FaFileAlt /> },
  ];

  return (
    <div className="sidebar">
      <Profile />
      <div className="sidebar-links">
        {links.map((linkData, index) => (
          <Link
            key={index}
            to={linkData.to}
            className={`sidebar-link ${
              activeLink === linkData.to ? "active" : ""
            }`}
            onClick={() => handleLinkClick(linkData.to)}
          >
            <span className="link-icon">{linkData.icon}</span>
            <span className="link-text">{linkData.text}</span>
          </Link>
        ))}
      </div>

      <img src={myImage} className="lastimg" />
    </div>
  );
};

export default Sidebar;
