/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 12:05:27
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 12:05:41
 * @FilePath: \06-react-fetch\src\components\CounterUseState.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";

const CounterUseState = () => {
  // 通过 useState 创建本地状态，初始值为 0
  const [count, setCount] = useState(0);

  // 返回一个包含当前 count 状态和更新该状态的 setCount 函数的数组
  return (
    <div>
      <p>计数器: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
};

export default CounterUseState;
