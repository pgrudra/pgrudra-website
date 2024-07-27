import React from "react";
import styled from "@emotion/styled";

const ExperienceContainer = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExperienceTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 30px;
`;

const CompanyName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const JobTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 5px;
`;

const JobDuration = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const JobDescription = styled.p`
  line-height: 1.6;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceItem>
        <CompanyName>Tech Company A</CompanyName>
        <JobTitle>Senior Software Engineer</JobTitle>
        <JobDuration>January 2020 - Present</JobDuration>
        <JobDescription>
          Led development of key features for the company's main product.
          Mentored junior developers and implemented best practices for code
          quality.
        </JobDescription>
      </ExperienceItem>
      <ExperienceItem>
        <CompanyName>Tech Startup B</CompanyName>
        <JobTitle>Full Stack Developer</JobTitle>
        <JobDuration>June 2017 - December 2019</JobDuration>
        <JobDescription>
          Worked on both frontend and backend development for a fast-growing
          startup. Implemented new features and optimized existing codebase for
          better performance.
        </JobDescription>
      </ExperienceItem>
      {/* Add more ExperienceItem components as needed */}
    </ExperienceContainer>
  );
};

export default Experience;
