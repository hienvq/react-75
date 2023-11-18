import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Sedan",
      key: "mail",
      icon: <MailOutlined />,
      children: [
        {
          label: "Honda",
          onClick: () => {
            navigate("/sedan-honda");
          },
        },
        {
          label: "Toyota",
        },
      ],
    },
    {
      label: "SUV",
      key: "app",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: "Honda",
        },
        {
          label: "Toyota",
        },
      ],
    },
  ];

  return <Menu mode="horizontal" items={items} />;
};
export default Navbar;
