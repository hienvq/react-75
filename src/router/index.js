import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "../components/AdminLayout";
import UserPage from "../pages/UserPage";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <UserPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "product",
        element: <h1>product Page</h1>,
      },
      {
        path: "category",
        element: <h1>category Page</h1>,
      },
    ],
  },
]);

// http://localhost:3000/ => Landing page
// http://localhost:3000/login => Login page
// http://localhost:3000/admin (user management, product management, category management)
// 1. http://localhost:3000/admin/user => User page
// 2. http://localhost:3000/admin/product => Product page
// 3. http://localhost:3000/admin/category => Category page
