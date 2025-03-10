import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes";
import { Layout } from "antd";

const App = () => {
  const [user, setUser] = useState(null);

  // 创建共享的用户状态方法
  const handleLogin = (user) => setUser(user);
  const handleLogout = () => setUser(null);

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <AppRouter user={user} onLogin={handleLogin} onLogout={handleLogout} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
