import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/home/HomeLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import InventoryPage from "./pages/inventory/InventoryPage";
import HomePage from "./pages/home/HomePage";
import AuthLayout from "./layouts/auth/AuthLayout";
import LoginPage from "./pages/login/LoginPage";
import { AuthProvider } from "./lib/authContext";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "/dashboard", element: <DashboardPage /> },
        { path: "/dashboard/inventory", element: <InventoryPage /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "/auth/login", element: <LoginPage /> },
        { path: "/auth/register", element: <LoginPage /> },
      ],
    },
  ]);

  return <AuthProvider><RouterProvider router={router} /></AuthProvider>;
}
