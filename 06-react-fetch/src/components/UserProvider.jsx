/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 12:49:37
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 12:50:11
 * @FilePath: \06-react-fetch\src\components\UserProvider.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import UserContext from "../context/UserContext";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Alice", age: 25 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
