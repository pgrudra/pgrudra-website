import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const SectionContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const SkillItem = styled.div`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) =>
    props.theme === "matrix"
      ? "rgba(3, 160, 98, 0.15)"
      : "rgba(12, 160, 188,0.1)"};
`;

const SkillName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SkillLevel = styled.div<{ level: number }>`
  height: 10px;
  background-color: ${(props) =>
    props.theme === "matrix" ? "#03A062" : "#087388"};
  border-radius: 5px;
  width: ${(props) => props.level}%;
`;

const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 20 },
    { name: "Kotlin", level: 60 },
    { name: "JavaScript", level: 10 },
    { name: "TypeScript", level: 30 },
    { name: "SpringBoot", level: 85 },
    { name: "Android", level: 85 },
    { name: "Google Cloud", level: 90 },
    { name: "Firebase", level: 80 },
    { name: "AWS", level: 60 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "Git", level: 75 },
    { name: "Junit5", level: 70 },
    { name: "Mockito", level: 60 },
    { name: "Swagger", level: 80 },
    { name: "Graylog", level: 80 },
    { name: "Next.js", level: 20 },
    { name: "Claude Code with MCP", level: 80 },
  ];

  return (
    <SectionContainer>
      <Title>Skills</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillItem key={index} theme={theme}>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel theme={theme} level={skill.level} />
          </SkillItem>
        ))}
      </SkillsGrid>
    </SectionContainer>
  );
};

export default Skills;
