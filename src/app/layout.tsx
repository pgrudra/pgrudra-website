"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"matrix" | "bright">("matrix");

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "matrix" ? "bright" : "matrix"));
  };

  return (
    <html lang="en">
      <body>
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
            {theme === "matrix" ? "☀️" : "🌙"}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
