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

const TitleDurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleAtCompany = styled.h3`
  font-size: 22px;
  margin-bottom: 6px;
`;

const JobDuration = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const JobDescription = styled.p`
  line-height: 0.4;
  font-family: "gotham";
  @media (max-width: 768px) {
    line-height: 1.6;
  }
`;

const SeSEVALink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Past Experience</ExperienceTitle>
      <ExperienceItem>
        <TitleDurationContainer>
          <TitleAtCompany>Software Engineer @ Xpressbees</TitleAtCompany>
          <JobDuration>June 2022 - June 2024</JobDuration>
        </TitleDurationContainer>
        <JobDescription>
          Integrated the company's internal systems with the ONDC framework
          through Java Spring Boot Application.
        </JobDescription>
        <JobDescription>
          Owned backend tasks for Dynamic Rate Billing for Remote Service
          Centres, which processes rates for around 15 lakh shipments per day.
        </JobDescription>
      </ExperienceItem>
      <ExperienceItem>
        <TitleDurationContainer>
          <TitleAtCompany>Project Intern @ Life and Limb</TitleAtCompany>
          <JobDuration>Dec. 2021 - Feb. 2022</JobDuration>
        </TitleDurationContainer>
        <JobDescription>
          Developed prototype of an orthotic hand device for people suffering
          from neurological disorders
        </JobDescription>
      </ExperienceItem>
      <ExperienceItem>
        <TitleDurationContainer>
          <TitleAtCompany>Founder @ SeSEVA</TitleAtCompany>
          <JobDuration>May 2021 - Aug. 2021</JobDuration>
        </TitleDurationContainer>
        <JobDescription>
          Ideated, Architectured and Developed{" "}
          <SeSEVALink
            href="https://github.com/pgrudra/SeSEVA"
            className="repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            SeSEVA
          </SeSEVALink>
          , an android application which provides a means to social service as
          an incentive for smartphone de-addiction.
        </JobDescription>
      </ExperienceItem>
    </ExperienceContainer>
  );
};

export default Experience;
