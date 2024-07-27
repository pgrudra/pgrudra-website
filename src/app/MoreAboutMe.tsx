import React from "react";
import styled from "@emotion/styled";

const MoreAboutMeContainer = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MoreAboutMeTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const MoreAboutMeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MoreAboutMeSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  line-height: 1.6;
`;

const MoreAboutMe: React.FC = () => {
  return (
    <MoreAboutMeContainer id="more-about-me">
      <MoreAboutMeTitle>More About Me</MoreAboutMeTitle>
      <MoreAboutMeContent>
        <MoreAboutMeSection>
          <SectionTitle>Hobbies</SectionTitle>
          <SectionContent>
            In my free time, I enjoy hiking, photography, and playing the
            guitar. I'm always looking for new trails to explore and capture
            beautiful landscapes.
          </SectionContent>
        </MoreAboutMeSection>
        <MoreAboutMeSection>
          <SectionTitle>Volunteering</SectionTitle>
          <SectionContent>
            I'm passionate about giving back to the community. I volunteer at
            local code camps, teaching programming basics to underprivileged
            youth.
          </SectionContent>
        </MoreAboutMeSection>
        <MoreAboutMeSection>
          <SectionTitle>Goals</SectionTitle>
          <SectionContent>
            My goal is to continue growing as a developer and eventually start
            my own tech company that focuses on solving environmental
            challenges.
          </SectionContent>
        </MoreAboutMeSection>
      </MoreAboutMeContent>
    </MoreAboutMeContainer>
  );
};

export default MoreAboutMe;
