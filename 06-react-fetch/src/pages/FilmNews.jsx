import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FilmNews.css"; // 引入样式文件

const FilmNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = 10; // 每页显示10条消息

  const fetchNews = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get("https://apis.tianapi.com/film/index", {
        params: {
          key: "c452e15e99c876e1eb4523c04e5e69f1",
          page: page,
          num: pageSize,
        },
      });
      if (response.data.code === 200) {
        setNewsList(response.data.result.newslist);
      } else {
        setError("获取数据失败");
      }
    } catch (error) {
      setError("请求错误: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(curPage);
  }, [curPage]);

  const handleNextPage = () => {
    setCurPage((prev) => Math.min(prev + 1, 5)); // 假设最大页数为5
  };

  const handlePrevPage = () => {
    setCurPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="film-news-container">
      <h2>影视资讯</h2>
      {loading && <div className="loading">正在加载...</div>}
      {error && <div className="error">{error}</div>}
      <ul className="news-list">
        {newsList.map((news) => (
          <li key={news.id} className="news-item">
            <h3 className="news-title">
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                {news.title}
              </a>
            </h3>
            <p className="news-description">{news.description}</p>
            <img src={news.picUrl} alt={news.title} className="news-image" />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={curPage === 1}>
          上一页
        </button>
        <button onClick={handleNextPage} disabled={curPage === 5}>
          下一页
        </button>
      </div>
    </div>
  );
};

export default FilmNews;
