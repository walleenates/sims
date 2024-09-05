/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import './Sidebar.css'

function Sidebar({ SidebarLinks }) {
  return (
    <div className="sidebar">
      Sidebar
      {SidebarLinks.map((link) => (
          <Link key={link.tag} to={link.href}>
            {link.tag}
          </Link>
        ))}
    </div>
  );
}

export default Sidebar;