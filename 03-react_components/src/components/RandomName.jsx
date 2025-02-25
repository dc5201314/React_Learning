import { useState } from "react";

const RandomName = () => {
  const names = ["ChatGpt", "DeepSeek", "豆包", "GPT-4", "GPT-5"];
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const generateName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
    setCount(count + 1);
  };

  return (
    <div>
      <p>随机名字: {name || "点击生成名字"}</p>
      <button onClick={generateName}>生成名字</button>
      <p>已经生成次数: {count}</p>
    </div>
  );
};
export default RandomName;
