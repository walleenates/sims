import { Outlet } from "react-router-dom";
import "./homelayout.css"

export default function HomeLayout() {
  return (
    <main className="container">
      <nav className="topnav">
        topnav
      </nav>
      <Outlet />
    </main>
  )
}
