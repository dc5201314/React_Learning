import React from "react";
import BlogList from "../components/BlogList"; // 导入 BlogList 组件

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <BlogList /> {/* 嵌入 BlogList 组件 */}
    </div>
  );
};

export default Home;
