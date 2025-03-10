// src/pages/Profile.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../App.css"; // 引入样式

function Profile() {
  return (
    <div className="profile-container">
      {" "}
      {/* 使用一个容器来包裹布局 */}
      <nav className="profile-nav">
        <NavLink
          to="fans"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Fans
        </NavLink>
        <NavLink
          to="follow"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Follow
        </NavLink>
      </nav>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
