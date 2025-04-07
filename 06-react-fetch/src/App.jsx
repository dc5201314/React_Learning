/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 10:23:03
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 13:57:36
 * @FilePath: \06-react-fetch\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import CounterZustand from "./components/CounterZustand";
import Cart from "./components/Cart";
const App = () => {
  return (
    // <BrowserRouter>
    //   <nav>
    //     <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
    //       <li>
    //         <Link to="/">⽂章列表</Link>
    //       </li>
    //       <li>
    //         <Link to="/create">新建⽂章</Link>
    //       </li>
    //       <li>
    //         <Link to="/film-news">视频</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <hr />
    //   <AppRoutes />
    // </BrowserRouter>
    <>
      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <CounterUseState />
      <Profile />
      <TodoList />
      <CounterZustand /> */}
      <Cart />
    </>
  );
};
export default App;
