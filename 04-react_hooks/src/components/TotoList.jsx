import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.trim() === "") return;
    const newTodo = { text: todo, completed: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>待办事项列表</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="请输入待办事项"
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map((todoItem, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todoItem.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(index)}
            >
              {todoItem.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
