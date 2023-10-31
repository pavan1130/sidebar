import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaExclamationCircle, FaBell, FaFileAlt } from 'react-icons/fa';
import '../styles/sidebar.css'; // Make sure to create a separate CSS file for the sidebar styles
import { Profile } from './profile.jsx';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Profile />
            <div className="sidebar-links">
                <Link to="/dashboard" className="sidebar-link">
                    <FaChartLine className="sidebar-icon" />
                    Dashboard
                </Link>
                <Link to="/service-risk-report" className="sidebar-link">
                    <FaExclamationCircle className="sidebar-icon" />
                    Service Risk Report
                </Link>
                <Link to="/notifications" className="sidebar-link">
                    <FaBell className="sidebar-icon" />
                    Notifications
                </Link>
                <Link to="/report" className="sidebar-link">
                    <FaFileAlt className="sidebar-icon" />
                    Report
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
