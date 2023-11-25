import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "../components/AdminLayout";
import UserPage from "../pages/UserPage";
import CarItem from "../components/CarItem";
import TestPage from "../pages/TestPage";
import Test2Page from "../pages/Test2Page";
const fakeData = [
  {
    img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1161.jpg",
    name: "1",
    price: 1,
  },
  {
    img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1161.jpg",
    name: "1",
    price: 1,
  },
  {
    img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1161.jpg",
    name: "1",
    price: 1,
  },
];
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "sedan-honda",
        element: (
          <div style={{ display: "flex", columnGap: 20 }}>
            {fakeData.map((e) => (
              <CarItem
                img={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1161.jpg"}
                name={"Sedan Honda"}
                price={1000000}
              />
            ))}
          </div>
        ),
      },
    ],
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
  {
    path: "/test",
    element: (
      <>
        <TestPage />
        {/* <Test2Page /> */}
      </>
    ),
  },
]);

// http://localhost:3000/ => Landing page
// http://localhost:3000/login => Login page
// http://localhost:3000/admin (user management, product management, category management)
// 1. http://localhost:3000/admin/user => User page
// 2. http://localhost:3000/admin/product => Product page
// 3. http://localhost:3000/admin/category => Category page
