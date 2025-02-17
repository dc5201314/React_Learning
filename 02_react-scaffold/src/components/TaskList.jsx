// TaskList.jsx
import React from "react";

const TaskList = () => {
  const taskList = [
    { id: 1, name: "吃饭", completed: true },
    { id: 2, name: "睡觉", completed: false },
    { id: 3, name: "敲代码", completed: false },
  ];

  // 计算未完成的任务数
  const incompleteTasksCount = taskList.filter(
    (task) => !task.completed
  ).length;

  // 内联样式
  const styles = {
    completed: {
      color: "green",
    },
    notCompleted: {
      color: "red",
    },
    item: {
      marginBottom: "10px",
    },
  };

  // 渲染任务列表
  return (
    <div>
      <h2>当前未完成的任务数: {incompleteTasksCount}</h2>
      <div className="item-list">
        {taskList.map((task) => (
          <div className="item" key={task.id} style={styles.item}>
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

export default TaskList;
