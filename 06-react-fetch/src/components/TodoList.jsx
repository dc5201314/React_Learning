/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 12:07:20
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 12:07:54
 * @FilePath: \06-react-fetch\src\components\TodoList.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(["学习 React", "做练习"]);

  const addTodo = () => {
    setTodos([...todos, "新任务"]); // 添加新任务
  };

  const removeTodo = () => {
    setTodos(todos.slice(0, todos.length - 1)); // 删除最后一个任务
  };

  return (
    <div>
      <h3>待办事项</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>添加任务</button>
      <button onClick={removeTodo}>删除任务</button>
    </div>
  );
};

export default TodoList;
