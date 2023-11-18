import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("access-token");
    navigate("/login");
  };
  const items = [
    {
      key: "user",
      icon: React.createElement(UserOutlined),
      label: "User Page",
      onClick: () => {
        navigate("/admin/user");
      },
    },
    {
      key: "product",
      icon: React.createElement(VideoCameraOutlined),
      label: "Product Page",
      onClick: () => {
        navigate("/admin/product");
      },
    },
    {
      key: "category",
      icon: React.createElement(UploadOutlined),
      label: "Category Page",
      onClick: () => {
        navigate("/admin/category");
      },
    },
  ];
  const activeKey = items.find((element) => location.pathname.includes(element.key))?.key || "user";
  const token = localStorage.getItem("access-token");
  return token ? (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} selectedKeys={[activeKey]} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            background: colorBgContainer,
            borderBottom: "1px solid #ddd",
          }}
        >
          <Button danger onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Navigate to={"/login"} />
  );
};
export default AdminLayout;
