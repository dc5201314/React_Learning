/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 10:40:10
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 11:25:40
 * @FilePath: \06-react-fetch\src\pages\PostDetail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { get } from "../api/request";
import { put } from "../api/request";

const PostDetail = () => {
  const { id } = useParams(); // 从路由参数获取文章 id
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  useEffect(() => {
    get(`/posts/${id}`)
      .then((data) => {
        setPost(data);
        setLoading(false);
        setEditedTitle(data.title);
        setEditedBody(data.body);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    if (post) {
      setEditedTitle(post.title);
      setEditedBody(post.body);
    }
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    try {
      await put(`/posts/${id}`, {
        title: editedTitle,
        body: editedBody,
      });
      alert("文章编辑成功！");
      setIsEditing(false);
      // 重新获取文章详情
      get(`/posts/${id}`)
        .then((data) => {
          setPost(data);
        })
        .catch((error) => {
          setError(error);
        });
    } catch (error) {
      setError(error);
    }
  };
  const handleCancel = () => {
    setIsEditing(false);
    if (post) {
      setEditedTitle(post.title);
      setEditedBody(post.body);
    }
  };
  if (loading) return <div>正在加载文章详情...</div>;
  if (error) return <div>加载错误: {error.message}</div>;

  if (isEditing) {
    return (
      <div>
        <button onClick={() => navigate(-1)}>返回</button>
        <h2>编辑文章</h2>
        <form>
          <div>
            <label>标题: </label>
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>内容: </label>
            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={handleSave}>
            保存
          </button>
          <button type="button" onClick={handleCancel}>
            取消
          </button>
          {loading && <div>正在保存...</div>}
          {error && <div>保存错误: {error.message}</div>}
        </form>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>返回</button>
      <button onClick={handleEdit}>编辑</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">返回文章列表</Link>
    </div>
  );
};

export default PostDetail;
