import { Outlet } from "react-router-dom";
import "./authlayout.css"


export default function AuthLayout() {
  return (
    <main className="auth-container">
      <Outlet />
    </main>
  );
}
