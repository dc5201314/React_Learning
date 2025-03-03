import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // 新增状态用于存储错误信息

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.xygeng.cn/one");
        if (!response.ok) {
          throw new Error("网络响应不是正 OK");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message); // 设置错误信息
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>每日一句</h1>

      {error ? (
        <p>{error}</p>
      ) : data ? (
        <p>{data.data.content}</p>
      ) : (
        <p>加载中...</p>
      )}
    </div>
  );
};

export default FetchData;
