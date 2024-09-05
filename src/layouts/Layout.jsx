import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Adjust the path based on your file structure

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet /> {/* This will render the routed content */}
      </main>
    </div>
  );
}

export default Layout;
