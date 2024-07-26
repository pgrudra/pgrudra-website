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

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme === "matrix"
      ? "rgba(3, 160, 98, 0.1)"
      : "rgba(255, 245, 230, 0.1)"};
`;

const ActivityTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ActivityDescription = styled.p`
  font-size: 18px;
`;

const RecentWork = () => {
  const { theme } = useTheme();

  const activities = [
    {
      title: "Building PollBetter",
      description:
        "Working on my SAAS product to ease the process of surveying across multiple platforms & analysis of collected data.",
    },
    {
      title: "Freelance Android Developer",
      description: (
        <p>
          As a freelance developer at Z
          <span style={{ fontFamily: "gotham" }}>ü</span>s, sprearheading
          android app dev for Vult: Private Cloud & overseeing android app dev
          for Bolt: Cloud Storage Economy.
        </p>
      ),
    },
    {
      title: "Learning Web Dev",
      description:
        "Expanding my knowledge in web development by builing my personal site. This site is a stepping stone towards building PollBetter.",
    },
  ];

  return (
    <SectionContainer>
      <Title>What Am I Up To</Title>
      <ActivityList>
        {activities.map((activity, index) => (
          <ActivityItem key={index} theme={theme}>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityDescription>{activity.description}</ActivityDescription>
          </ActivityItem>
        ))}
      </ActivityList>
    </SectionContainer>
  );
};

export default RecentWork;
