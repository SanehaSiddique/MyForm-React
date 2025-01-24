import React, { useState } from "react";
import "../styles/ThemeToggle.css";

function ThemeToggle() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
    document.body.classList.toggle("dark-theme");
  };
  return (
    <button className="toggle-button" onClick={toggleTheme}>
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
