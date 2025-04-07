/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 10:40:21
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 11:26:27
 * @FilePath: \06-react-fetch\src\pages\CreatePost.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api/request";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await post("/posts", {
        title,
        body,
      });
      alert("新文章创建成功！");
      navigate("/"); // 成功后返回文章列表
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>新建文章</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题: </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>内容: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          提交
        </button>
        {loading && <div>正在提交...</div>}
        {error && <div>提交错误: {error.message}</div>}
      </form>
    </div>
  );
};

export default CreatePost;
