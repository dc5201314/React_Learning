import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "black" : "white",
      }}
    >
      <h1>Theme Toggle</h1>
      <button onClick={toggleTheme}>切换模式</button>
    </div>
  );
};

export default ThemeToggle;
