"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "matrix" | "bright";

const ThemeContext = createContext<
  | {
      theme: Theme;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("matrix");

  useEffect(() => {
    document.body.className = `${theme}-theme`;

    if (theme === "matrix") {
      document.body.style.fontFamily = "'MatrixFont', sans-serif";
    } else {
      document.body.style.fontFamily = "sans-serif";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "matrix" ? "bright" : "matrix"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
