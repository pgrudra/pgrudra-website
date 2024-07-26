"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: ${(props) =>
    props.theme === "matrix" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 102, 0, 0.8)"};
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer theme={theme}>
      <nav>
        <NavList>
          <NavItem onClick={() => scrollToSection("home")}>Home</NavItem>
          <NavItem onClick={() => scrollToSection("what-am-i-up-to")}>
            What am I up to
          </NavItem>
          <NavItem onClick={() => scrollToSection("skills")}>Skills</NavItem>
          <NavItem>Experience</NavItem>
          <NavItem>More About Me</NavItem>
        </NavList>
      </nav>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "matrix" ? "Go Bright" : "Go Matrix"}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
