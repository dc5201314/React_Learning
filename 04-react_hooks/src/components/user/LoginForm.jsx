import React, { useState } from "react";
import { useUser } from "./UserContext";
import "./styles.css"; // 引入样式文件

const LoginForm = () => {
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 模拟一个简单的登录验证
    if (username === "admin" && password === "123456") {
      login(username); // 假设登录成功
      setUsername("");
      setPassword("");
      setError(""); // 清除错误信息
    } else {
      setError("用户名或密码错误，请重试。");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>用户登录</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label>用户名</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>密码</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button primary">
          登录
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
