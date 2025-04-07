/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 12:50:20
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 12:50:37
 * @FilePath: \06-react-fetch\src\components\UserProfile.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useContext } from "react";
import UserContext from "../context/UserContext";
const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>个⼈资料</h2>
      <p>姓名 : {user.name}</p>
      <p>年龄 : {user.age}</p>
    </div>
  );
};
export default UserProfile;
