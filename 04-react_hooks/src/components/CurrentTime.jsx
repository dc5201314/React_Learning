import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // 初始时间设置
    const timer = setInterval(updateTime, 1000); // 每秒更新

    return () => clearInterval(timer); // 组件卸载时清除定时器
  }, []);

  return (
    <div>
      <h1>当前时间</h1>
      <p>{time}</p>
    </div>
  );
};

export default CurrentTime;
