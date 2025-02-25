// RegistPage.jsx
import { useState } from "react";
import RegistForm from "./RegistForm";

const RegistPage = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data); // 接收表单数据并更新状态
  };

  return (
    <div>
      <h1>注册页面</h1>
      <RegistForm onSubmit={handleFormSubmit} />
      {userData && (
        <div>
          <h2>已提交的数据:</h2>
          <p>姓名: {userData.name}</p>
          <p>邮箱: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistPage;
