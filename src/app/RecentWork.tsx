import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const SectionContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: "rgb(255,0,255)";
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
      ? "rgba(3, 160, 98, 0.15)"
      : "rgba(12, 160, 188,0.1)"};
`;

const ActivityTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ActivityDescription = styled.p`
  font-size: 18px;
  font-family: "gotham";
`;

const RecentWork = () => {
  const { theme } = useTheme();

  const activities = [
    {
      title: "Backend Developer at Loadshare",
      description:
        "Building & maintaining the governance system & core allocation engine of Loadshare, a 3rd party logistics provider for last mile deliveries",
    },
    {
      title: "Personalised Gifts through 3D printing",
      description:
        "Building Sketch2Shape, a D2C web app for generating truly personalised gifts",
    },
    {
      title: "Gesture Controlled mini games",
      description:
        "Building mini games for fun using mediapipe hands, three.js, vitejs/vanillajs, phaser, netlify",
    },
    {
      title: "Vibing with Agentic AI",
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
