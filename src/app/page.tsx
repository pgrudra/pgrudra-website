"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";
import RecentWork from "./RecentWork";
import Skills from "./Skills";

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
  }
`;

const TextContent = styled.div`
  display: flex;
  font-size: 24px;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  margin-right: 800px;
  margin-top: 24px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-right: 0;
    text-align: center;
    order: 3;
    margin-top: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 60%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    order: 1;
    margin-bottom: 20px;
  }
`;

const NameWrapper = styled.div`
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  left: calc(60% + 120px);

  @media (max-width: 768px) {
    position: static;
    order: 2;
    margin-bottom: 20px;
  }
`;

const PillButton = styled.button<{ bgImage: string; opacity: number }>`
  background-image: url(${(props) => props.bgImage});
  width: 66px;
  height: 60px;
  background-size: cover;
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
    margin: 10px;
  }
`;

const ConnectButton = styled.button`
  background-color: #eeff00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ImageContainer = styled.div`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  width: 200px;
  height: 200px;
`;

const PillContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContainer = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 20px;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
`;

const TooltipText = styled.div`
  position: relative;
  z-index: 1;
`;

const UnderlinedLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const EmailFormContainer = styled.div<{ show: boolean; opacity: number }>`
  position: absolute;
  top: 100%;
  left: -10%;
  width: 120%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${(props) => props.opacity};
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 2;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const EmailInput = styled.input`
  margin-bottom: 5px;
  padding: 5px;
  width: 90%;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  background-color: #03a062;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-family: Matrix-font;
`;

const SectionWrapper = styled.div`
  margin-top: 20px;
`;

export default function Home() {
  const { theme } = useTheme();
  const [bluePillOpacity, setBluePillOpacity] = useState(0);
  const [tooltipOpacity, setTooltipOpacity] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      const maxDistance = 300;
      const minDistance = 150;
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setShowEmailForm(false);
    setEmail("");
    alert(
      "Thank you for your interest! We'll notify you when PollBetter launches."
    );
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
                    Blue to PollBetter!
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
                    <TooltipContainer opacity={tooltipOpacity}>
                      <TooltipText>
                        PollBetter is under development.
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
                      <EmailForm onSubmit={handleEmailSubmit}>
                        <EmailInput
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                        <SubmitButton type="submit">Notify Me</SubmitButton>
                      </EmailForm>
                    </EmailFormContainer>
                  </PillContainer>
                </div>
              </>
            ) : (
              <>
                <p>Connect With Me</p>
                <ConnectButton
                  onClick={() =>
                    handleClick("https://calendar.app.google/tSkdxka8E9aqJaKM6")
                  }
                >
                  Connect
                </ConnectButton>
              </>
            )}
          </TextContent>
          <ImageWrapper>
            <ImageContainer>
              <Image
                src={
                  theme === "matrix"
                    ? "/my-photo-matrix.png"
                    : "/my-photo-bright.png"
                }
                alt="Prajwal Rudrakshi's image"
                width={200}
                height={200}
              />
            </ImageContainer>
          </ImageWrapper>
          <NameWrapper>Prajwal Rudrakshi</NameWrapper>
        </ContentWrapper>
      </HomeContainer>
      <SectionWrapper id="what-am-i-up-to">
        <RecentWork />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
    </div>
  );
}
