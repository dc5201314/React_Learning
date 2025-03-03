import React from "react";
import { useUser } from "./UserContext";
import "./styles.css";

const LogoutButton = () => {
  const { user, logout } = useUser();

  if (!user) return null; // 如果用户未登录，返回 null，不显示按钮

  const handleLogout = () => {
    logout(); // 调用登出函数
    alert("已成功退出登录"); // 提示用户已成功登出
  };

  return (
    <button onClick={handleLogout} className="button logout">
      退出登录 ({user.username})
    </button>
  );
};

export default LogoutButton;
