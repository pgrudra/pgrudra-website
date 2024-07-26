"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>What am I up to</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>More About Me</li>
        </ul>
      </nav>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "matrix" ? "Go Bright" : "Go Matrix"}
      </div>
    </header>
  );
};

export default Header;
