import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardlayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardLayout() {

  const user = "fetchUser";
  const navigation = useNavigate()

  if(!user) {
    navigation("/auth/login")
  }

  const SidebarLinks = [
    {
      tag: 'Dashboard',
      href: '/dashboard',
      icon: 'dsasd',
    },
    {
      tag: 'Manage Item',
      href: '/manage-item',
      icon: 'dsasd',
    },
  ]

  return (
    <main className="container flex-row">
      <Sidebar SidebarLinks={SidebarLinks} />
    
      <Outlet />
    </main>
  )
}
