import React, { useEffect, useState } from "react";

// 定义 DataFetcher 组件，使用箭头函数
const DataFetcher = () => {
  // 使用 useState 来管理数据状态和加载状态
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 使用 useEffect 来执行副作用操作，例如数据获取
  useEffect(() => {
    // 定义一个异步函数来获取数据
    const fetchData = async () => {
      try {
        // 使用 fetch 发起 GET 请求
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // 检查响应状态是否正常
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // 解析响应数据为 JSON 格式
        const jsonData = await response.json();
        // 更新数据状态
        setData(jsonData);
      } catch (error) {
        // 打印错误信息
        console.error("Error fetching data:", error);
      } finally {
        // 更新加载状态
        setLoading(false);
      }
    };

    // 调用异步函数
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
