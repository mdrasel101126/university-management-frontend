"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";
import { JwtPayload } from "jwt-decode";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  //const role = USER_ROLE.SUPER_ADMIN;
  const {role} = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        UMS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;