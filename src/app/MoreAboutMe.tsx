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
  gap: 40px;
  font-family: "gotham";
`;

const MoreAboutMeSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SectionContent = styled.div`
  line-height: 1.6;
`;

const MoreAboutMe: React.FC = () => {
  return (
    <MoreAboutMeContainer id="more-about-me">
      <MoreAboutMeTitle>More About Me</MoreAboutMeTitle>
      <MoreAboutMeContent>
        <MoreAboutMeSection>
          <SectionTitle>Upbringing</SectionTitle>
          <SectionContent>
            I was born & brought up in Bagalkot, a town in Karnataka, India. My
            father, a professor of Mechanical Engineering & mother a dedicated
            homemaker raised me with at most care. I still live with my parents
            in the same town & build tech products for the world. Their support
            has been instrumental in shaping my journey.
          </SectionContent>
        </MoreAboutMeSection>
        <MoreAboutMeSection>
          <SectionTitle>Education</SectionTitle>
          <SectionContent>
            Studied in hometown till 10th grade. Then went to Narayana,
            Hyderabad, where I had the most gratified years of my life. It's due
            to the mentorship of my teachers & staff, and my hardwork that I
            cracked JEE Advanced & joined IIT Kanpur for a degree in Physics.
            Though I feel I couldn't take much advantage of my time at IIT,
            happy that I made friends for life over there.
          </SectionContent>
        </MoreAboutMeSection>
      </MoreAboutMeContent>
    </MoreAboutMeContainer>
  );
};

export default MoreAboutMe;
