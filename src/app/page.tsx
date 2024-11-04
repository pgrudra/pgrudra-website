"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useTheme } from "./ThemeContext";
import RecentWork from "./RecentWork";
import Skills from "./Skills";
import Experience from "./Experience";
import MoreAboutMe from "./MoreAboutMe";
import { prevWeekUrl, weekendLearningsUrl } from "@/config/urls";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding-top: 0px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    padding-top: 120px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
`;

const TextContent = styled.div`
  display: flex;
  font-size: 24px;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  margin-right: 550px;
  margin-top: 24px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-right: 0;
    text-align: center;
    order: 2;
    margin-top: 20px;
  }
`;

const slideOutToRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`;

const slideOutToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NameWrapper = styled.div`
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  left: calc(60% + 120px);

  @media (max-width: 768px) {
    position: static;
    order: 1;
    margin-bottom: 20px;
  }
`;

const PillButton = styled.button<{ bgImage: string; opacity: number }>`
  background-image: url(${(props) => props.bgImage});
  width: 66px;
  height: 60px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 40px;
  opacity: ${(props) => props.opacity};

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const ImageWrapper = styled.div<{ isMobile: boolean; theme: string }>`
  position: absolute;
  left: 60%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 5px;

  @media (max-width: 768px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div<{
  isVisible: boolean;
  animationType: string;
  theme: string;
  isMobile: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${(props) => {
      switch (props.animationType) {
        case "slideOutToRight":
          return slideOutToRight;
        case "slideOutToLeft":
          return slideOutToLeft;
        case "slideInFromLeft":
          return slideInFromLeft;
        case "slideInFromRight":
          return slideInFromRight;
        default:
          return "none";
      }
    }}
    0.5s ease-in-out forwards;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PillContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContainer = styled.div<{ opacity: number; theme: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.theme === "matrix" ? "white" : "#126fb1")};
  background-color: "none";
  border-radius: 20px;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
`;

const TooltipText = styled.div<{ theme: string }>`
  position: relative;
  z-index: 1;
  color: ${(props) => (props.theme === "matrix" ? "#00FFFF" : "#126fb1")};
`;

const UnderlinedLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const EmailFormContainer = styled.div<{ show: boolean; opacity: number }>`
  position: absolute;
  top: 90%;
  left: -10%;
  width: 120%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${(props) => props.opacity};
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 2;
  @media (max-width: 768px) {
    margin-top: 2px;
  }
`;

const SubmitButton = styled.button<{ theme: string }>`
  background-color: ${({ theme }) =>
    theme === "matrix" ? "#0c84bc" : "#0c7bbc"};
  color: ${({ theme }) => (theme === "matrix" ? "black" : "#beeaf3")};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-family: ${({ theme }) =>
    theme === "matrix" ? "Matrix-font" : "inherit"};
  margin-top: 5px;
`;

const SectionWrapper = styled.div`
  margin-top: 20px;
`;

const MailchimpFormContainer = styled.div`
  width: 100%;
  background: transparent;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const NestedFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  padding: 5px;
  font-size: 12px;
`;

const PrevWeekWrapper = styled.button<{ theme: string }>`
  cursor: pointer;
  background: transparent;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  right: calc(0%);
  bottom: -180px;
  border: 1px solid
    ${(props) => (props.theme === "matrix" ? "inherit" : "#126fb1")};
  border-radius: 4px;
  padding: 4px;
  color: inherit;
  font: inherit;
  @media (max-width: 768px) {
    order: 2;
    bottom: -95px;
    border: 1px solid
      ${(props) => (props.theme === "matrix" ? "#00FFFF" : "#126fb1")};
  }
`;

const WeekendLearningsButton = styled.button<{ theme: string }>`
  position: absolute;
  left: calc(0%);
  bottom: -180px;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid
    ${(props) => (props.theme === "matrix" ? "#00FFFF" : "#126fb1")};
  border-radius: 4px;
  padding: 8px 12px;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  transform: rotate(-8deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0deg);
  }

  @media (max-width: 768px) {
    bottom: -95px;
    left: 30%;
    transform: translateX(-50%) rotate(-5deg);

    &:hover {
      transform: translateX(-50%) rotate(0deg);
    }
  }
`;

declare global {
  interface Window {
    fnames?: any[];
    ftypes?: any[];
    jQuery?: any;
  }
}

export default function Home() {
  const { theme } = useTheme();
  const [bluePillOpacity, setBluePillOpacity] = useState(1);
  const [tooltipOpacity, setTooltipOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [previousTheme, setPreviousTheme] = useState<string | null>(null);
  const [matrixImageAnimation, setMatrixImageAnimation] =
    useState<string>("none");
  const [brightImageAnimation, setBrightImageAnimation] =
    useState<string>("none");
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (previousTheme && previousTheme !== theme) {
      if (theme === "matrix") {
        setBrightImageAnimation("slideOutToLeft");
        setMatrixImageAnimation("slideInFromRight");
      } else {
        setMatrixImageAnimation("slideOutToRight");
        setBrightImageAnimation("slideInFromLeft");
      }
    }
    setPreviousTheme(theme);
  }, [theme, previousTheme]);

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const bluePill = document.getElementById("bluePill");
    if (bluePill) {
      const buttonRect = bluePill.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const distance = Math.sqrt(
        Math.pow(event.clientX - buttonCenterX, 2) +
          Math.pow(event.clientY - buttonCenterY, 2)
      );

      const maxDistance = 200;
      const minDistance = 125;
      let distanceRatio = Math.min(
        Math.max(0, distance - minDistance) / (maxDistance - minDistance),
        1
      );
      setBluePillOpacity(distanceRatio);
      setTooltipOpacity(1 - distanceRatio);

      if (distanceRatio >= 1) setShowEmailForm(false);
    }
  };

  const handleBluePillClick = () => {
    if (isMobile) {
      setTooltipOpacity(tooltipOpacity === 0 ? 1 : 0);
    }
  };

  const handleOptInClick = () => {
    setShowEmailForm(true);
  };

  const handlePrevWeekClick = () => {
    handleClick(prevWeekUrl);
  };

  const handleWeekendLearningsClick = () => {
    handleClick(weekendLearningsUrl);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <HomeContainer id="home">
        <ContentWrapper>
          <TextContent>
            {theme === "matrix" ? (
              <>
                <div style={{ textAlign: "center" }}>
                  <p style={{ marginBottom: "0px", fontSize: "28px" }}>
                    Choose your Pill
                  </p>
                  <p
                    style={{
                      textAlign: "justify",
                      marginTop: "10px",
                      lineHeight: "30px",
                    }}
                  >
                    Red to Connect with Me!
                    <br />
                    Blue to PersonalProj!
                  </p>
                </div>
                <div>
                  <PillButton
                    bgImage="/red-pill.png"
                    onClick={() =>
                      handleClick(
                        "https://calendar.app.google/tSkdxka8E9aqJaKM6"
                      )
                    }
                    opacity={1}
                  ></PillButton>
                  <PillContainer>
                    <PillButton
                      id="bluePill"
                      bgImage="/blue-pill.png"
                      onClick={handleBluePillClick}
                      opacity={bluePillOpacity}
                    ></PillButton>
                    <TooltipContainer opacity={tooltipOpacity} theme={theme}>
                      <TooltipText theme={theme}>
                        PersonalProj is under development.
                        <br />
                        <UnderlinedLink onClick={handleOptInClick}>
                          Opt to get notified upon launch
                        </UnderlinedLink>
                        !
                      </TooltipText>
                    </TooltipContainer>
                    <EmailFormContainer
                      show={showEmailForm}
                      opacity={tooltipOpacity}
                    >
                      <MailchimpFormContainer>
                        <div id="mc_embed_signup">
                          <form
                            action="https://app.us22.list-manage.com/subscribe/post?u=5566bab7bcfbeb7bdaf60e277&amp;id=3a92b4aa25&amp;f_id=000fd1e1f0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                          >
                            <NestedFormContainer id="mc_embed_signup_scroll">
                              <EmailInput
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <SubmitButton
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                                theme={theme}
                              >
                                Notify Me
                              </SubmitButton>
                            </NestedFormContainer>
                          </form>
                        </div>
                      </MailchimpFormContainer>
                    </EmailFormContainer>
                  </PillContainer>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "0px",
                      fontSize: "28px",
                    }}
                  >
                    Choose your Kit
                  </p>
                  <p
                    style={{
                      textAlign: "justify",
                      marginTop: "10px",
                      lineHeight: "30px",
                    }}
                  >
                    Fins to Connect with Me!
                    <br />
                    Rucksack to PersonalProj!
                  </p>
                </div>
                <div>
                  <PillButton
                    bgImage="/scuba-fins.png"
                    onClick={() =>
                      handleClick(
                        "https://calendar.app.google/tSkdxka8E9aqJaKM6"
                      )
                    }
                    opacity={1}
                  ></PillButton>
                  <PillContainer>
                    <PillButton
                      id="bluePill"
                      bgImage="/rucksack.png"
                      onClick={handleBluePillClick}
                      opacity={bluePillOpacity}
                    ></PillButton>
                    <TooltipContainer opacity={tooltipOpacity} theme={theme}>
                      <TooltipText theme={theme}>
                        PersonalProj is under development.
                        <br />
                        <UnderlinedLink onClick={handleOptInClick}>
                          Opt to get notified upon launch
                        </UnderlinedLink>
                        !
                      </TooltipText>
                    </TooltipContainer>
                    <EmailFormContainer
                      show={showEmailForm}
                      opacity={tooltipOpacity}
                    >
                      <MailchimpFormContainer>
                        <div id="mc_embed_signup">
                          <form
                            action="https://app.us22.list-manage.com/subscribe/post?u=5566bab7bcfbeb7bdaf60e277&amp;id=3a92b4aa25&amp;f_id=000fd1e1f0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                          >
                            <NestedFormContainer id="mc_embed_signup_scroll">
                              <EmailInput
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <SubmitButton
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                                theme={theme}
                              >
                                Notify Me
                              </SubmitButton>
                            </NestedFormContainer>
                          </form>
                        </div>
                      </MailchimpFormContainer>
                    </EmailFormContainer>
                  </PillContainer>
                </div>
              </>
            )}
          </TextContent>
          <ImageWrapper isMobile={isMobile} theme={theme}>
            <ImageContainer
              isVisible={theme === "matrix"}
              animationType={matrixImageAnimation}
              theme={theme}
              isMobile={isMobile}
            >
              <Image
                src="/my-photo-matrix.png"
                alt="Prajwal Rudrakshi's matrix image"
                layout="fill"
                objectFit="cover"
              />
            </ImageContainer>
            <ImageContainer
              isVisible={theme !== "matrix"}
              animationType={brightImageAnimation}
              theme={theme}
              isMobile={isMobile}
            >
              <Image
                src="/my-photo-bright.png"
                alt="Prajwal Rudrakshi's bright image"
                layout="fill"
                objectFit="cover"
              />
            </ImageContainer>
          </ImageWrapper>
          <PrevWeekWrapper onClick={handlePrevWeekClick} theme={theme}>
            My Prev Week
          </PrevWeekWrapper>
          <WeekendLearningsButton
            onClick={handleWeekendLearningsClick}
            theme={theme}
          >
            Sunday Learnings
          </WeekendLearningsButton>
          <NameWrapper>Prajwal Rudrakshi</NameWrapper>
        </ContentWrapper>
      </HomeContainer>
      <SectionWrapper id="what-am-i-up-to">
        <RecentWork />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="more-about-me">
        <MoreAboutMe />
      </SectionWrapper>
    </div>
  );
}
