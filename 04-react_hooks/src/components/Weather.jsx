import React, { useEffect, useState } from "react";
import { Card, Button, Input, Typography, Spin, Alert } from "antd";
import {
  CloudTwoTone,
  ThunderboltOutlined,
  CloudOutlined,
  FireOutlined,
} from "@ant-design/icons";

// 天气图标映射
const weatherIcons = {
  Clear: <FireOutlined style={{ fontSize: "50px", color: "#FFD700" }} />,
  Clouds: <CloudTwoTone style={{ fontSize: "50px", color: "#A9A9A9" }} />,
  Rain: <CloudOutlined style={{ fontSize: "50px", color: "#1E90FF" }} />,
  Snow: <CloudOutlined style={{ fontSize: "50px", color: "#00FFFF" }} />,
  Thunderstorm: (
    <ThunderboltOutlined style={{ fontSize: "50px", color: "#FF4500" }} />
  ),
  // 其他天气类型可以继续添加
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Nanjing"); // 默认城市
  const [loading, setLoading] = useState(false); // 添加loading状态
  const API_KEY = "6639137380c14b28f2186189a7536b42"; // 替换为你的 API Key

  const fetchWeatherData = async () => {
    setLoading(true); // 开始加载
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("无法获取天气数据");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null); // 清除错误信息
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // 加载完成
    }
  };

  useEffect(() => {
    fetchWeatherData(); // 组件加载时获取天气数据
  }, [city]); // 添加 city 作为依赖

  return (
    <Card style={{ width: 300, margin: "auto", textAlign: "center" }}>
      <Typography.Title level={3}>天气查询</Typography.Title>
      <Input
        placeholder="输入城市名"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <Button
        type="primary"
        onClick={fetchWeatherData}
        style={{ marginBottom: "20px" }}
      >
        查询天气
      </Button>
      {error && <Alert message={`错误: ${error}`} type="error" />}
      {loading ? (
        <Spin /> // 移除tip属性
      ) : weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          {weatherIcons[weatherData.weather[0].main] || (
            <FireOutlined style={{ fontSize: "50px" }} />
          )}
          <p>温度: {weatherData.main.temp} °C</p>
          <p>天气: {weatherData.weather[0].description}</p>
          <p>湿度: {weatherData.main.humidity} %</p>
          <p>风速: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <div>无天气数据，请查询。</div>
      )}
    </Card>
  );
};

export default Weather;
