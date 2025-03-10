import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blog";
import "./Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  if (!blog) {
    return (
      <div style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
        抱歉，博客未找到
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        返回
      </button>
      <h1 className="blog-detail-title">{blog.title}</h1>
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="blog-detail-image"
      />
      <p>{blog.content}</p>
      <p className="blog-detail-info">作者: {blog.author}</p>
      <p className="blog-detail-info">日期: {blog.date}</p>
      <p className="blog-detail-info">阅读量: {blog.views}</p>

      {/* 返回按钮 */}
    </div>
  );
};

export default BlogDetail;
