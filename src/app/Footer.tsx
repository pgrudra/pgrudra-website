"use client";

import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const FooterContainer = styled.footer<{ theme: "matrix" | "bright" }>`
  background-color: ${(props) =>
    props.theme === "matrix" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 102, 0, 0.8)"};
  color: ${(props) => (props.theme === "matrix" ? "#03A062" : "#FFF5E6")};
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <FooterContainer theme={theme}>
      <p>
        <span style={{ fontFamily: "gotham" }}>&copy;</span>{" "}
        {new Date().getFullYear()} Prajwal Rudrakshi. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
