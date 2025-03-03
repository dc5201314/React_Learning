import React from "react";
import { useUser } from "./UserContext";
import "./styles.css"; // 确保样式文件存在

const UserStatus = () => {
  const { user } = useUser();

  return (
    <div className="navbar">
      <div className="status">
        {user ? `欢迎回来，${user.username}!` : "请先登录"}
      </div>
    </div>
  );
};

export default UserStatus; // 确保默认导出
