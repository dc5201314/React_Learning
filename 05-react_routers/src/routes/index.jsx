import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/Profile/Fans";
import Follow from "../pages/dashboard/Profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import NavBar from "../components/NavBar";
import BlogDetail from "../components/BlogDetails";
import { Suspense } from "react";

const AppRouter = ({ user, onLogin, onLogout }) => {
  const location = useLocation();

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <>
      {!location.pathname.startsWith("/login") && (
        <NavBar user={user} onLogout={onLogout} />
      )}

      <Suspense fallback={<div>加载中...</div>}>
        <Routes>
          {/* 公共路由 */}
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:bookId" element={<Book />} />

          {/* 登录路由（独立布局） */}
          <Route path="/login" element={<Login onLogin={onLogin} />} />

          {/* 仪表盘嵌套路由 */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard user={user} />
              </RequireAuth>
            }
          >
            <Route index element={<div>仪表盘首页</div>} />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            >
              <Route
                path="fans"
                element={
                  <RequireAuth>
                    <Fans />
                  </RequireAuth>
                }
              />
              <Route
                path="follow"
                element={
                  <RequireAuth>
                    <Follow />
                  </RequireAuth>
                }
              />
            </Route>
            <Route
              path="setting"
              element={
                <RequireAuth>
                  <Setting />
                </RequireAuth>
              }
            />
          </Route>

          {/* 404处理 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
