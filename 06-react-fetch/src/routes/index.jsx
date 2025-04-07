import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import FilmNews from "../pages/FilmNews";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/post/:id/edit" element={<PostDetail />} />
      <Route path="/film-news" element={<FilmNews />} />
    </Routes>
  );
};

export default AppRoutes;
