import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/about?name=John&age=20"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/book/123"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Book
      </NavLink>

      {user ? (
        <div
          className="user-info"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ marginRight: "10px" }}>
            {user.username} - {user.age}岁
          </span>
          <button onClick={onLogout} style={{ marginLeft: "10px" }}>
            登出
          </button>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          登录
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
