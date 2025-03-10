import React, { useState } from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="blog-container">
      <h2 className="blog-list-title">博客列表</h2>
      <ul className="blog-list">
        {currentPosts.map((blog) => (
          <li key={blog.id} className="blog-item">
            <Link to={`/blog/${blog.id}`} className="blog-title">
              <h3>{blog.title}</h3>
            </Link>
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="blog-image"
            />
            <p className="blog-info">
              作者: {blog.author} | 日期: {blog.date} | 阅读量: {blog.views}
            </p>
          </li>
        ))}
      </ul>

      {/* 分页控制 */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor:
                currentPage === index + 1 ? "#007bff" : "#f1f1f1",
              color: currentPage === index + 1 ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
