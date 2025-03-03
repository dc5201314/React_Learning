import { useEffect, useState } from "react";

const PafeTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `您已经点击了${count}次`;
  }, [count]);

  return (
    <div>
      <h1>点击次数</h1>
      <p>您已经点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
};

export default PafeTitle;
