import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../../App.css";
function Dashboard() {
  const location = useLocation();
  const { username, age } = location.state || {};
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {username}</p>
      <p>age{age}</p>

      <nav className="horizontal">
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          profile
        </NavLink>
        <NavLink
          to="setting"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
