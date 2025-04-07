import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get, del } from "../api/request";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 加载所有文章数据，可通过 _limit 控制数量，如 _limit=10
  useEffect(() => {
    get("/posts", { _limit: 20 })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    del(`/posts/${id}`)
      .then(() => {
        // 删除成功后更新状态，将对应文章从列表中过滤掉
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        alert("删除错误: " + error.message);
      });
  };

  if (loading) return <div>正在加载文章...</div>;
  if (error) return <div>加载错误: {error.message}</div>;

  return (
    <div>
      <h2>文章列表</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* 点击标题跳转到详情页 */}
            <Link
              to={`/post/${post.id}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              {post.title}
            </Link>
            <Link
              to={`/post/${post.id}/edit`}
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "green",
              }}
            >
              编辑
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              style={{ marginLeft: "10px" }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
