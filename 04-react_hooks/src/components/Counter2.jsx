import React, { useRef } from "react";
import Counter2 from "./Counter2";

const Parent = () => {
  const counterRef = useRef();

  const handleReset = () => {
    if (counterRef.current) {
      counterRef.current.reset(); // 调用 Counter2 中暴露的 reset 方法
    }
  };

  return (
    <div>
      <button onClick={handleReset}>Reset Counter</button>
      <Counter2 ref={counterRef} />
    </div>
  );
};

export default Parent;
