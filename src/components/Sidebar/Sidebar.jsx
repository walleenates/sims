/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Sidebar.css'; // Ensure this path is correct based on your file structure

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <img src="/path/to/small-logo.png" alt="Small Logo" className="small-logo" />
      </div>
      <div className="links-section">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/manage-item">Manage Item</Link>
        <Link to="/request-form">Request Form</Link>
        <Link to="/purchased-request">Purchased Request</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/scanner">Scanner</Link>
      </div>
    </div>
  );
}

export default Sidebar;
