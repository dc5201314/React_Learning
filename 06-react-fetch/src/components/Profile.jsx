/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 12:06:43
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 12:07:08
 * @FilePath: \06-react-fetch\src\components\Profile.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";

const Profile = () => {
  // 使用对象管理多个状态值
  const [user, setUser] = useState({ name: "John", age: 25 });

  // 更新状态中的单个字段
  const updateAge = () => {
    setUser((prevState) => ({
      ...prevState,
      age: prevState.age + 1,
    }));
  };

  return (
    <div>
      <p>姓名: {user.name}</p>
      <p>年龄: {user.age}</p>
      <button onClick={updateAge}>增加年龄</button>
    </div>
  );
};

export default Profile;
