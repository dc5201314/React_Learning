// TodoList.jsx
import { useState } from "react";

const TodoList = () => {
  // 初始任务列表
  const initialTasks = [
    { id: 1, name: "完成 React 随堂作业", completed: false },
    { id: 2, name: "学习 React", completed: false },
    { id: 3, name: "阅读技术文档", completed: true },
  ];

  // 使用 useState 管理任务列表
  const [tasks, setTasks] = useState(initialTasks);

  // 切换任务状态
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // 内联样式
  const styles = {
    completed: {
      color: "green",
      textDecoration: "line-through",
    },
    notCompleted: {
      color: "red",
    },
    item: {
      marginBottom: "10px",
      cursor: "pointer",
    },
  };

  // 渲染任务列表
  return (
    <div>
      <h1>Todo List</h1>
      <div className="item-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            style={styles.item}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            <span
              style={task.completed ? styles.completed : styles.notCompleted}
            >
              {task.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
