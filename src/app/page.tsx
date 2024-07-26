"use client";

import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding-top: 0px;

  @media (max-width: 768px) {
    height: auto;
    padding: 200px;
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

const PillButton = styled.button<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 40px;

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

export default function Home() {
  const { theme } = useTheme();
  const [bluePillColor, setBluePillColor] = useState("blue");

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
      const minDistance = 100;
      let distanceRatio = Math.min(
        Math.max(0, distance - minDistance) / maxDistance,
        1
      );
      const newColor = `rgb(
      ${Math.round(255 * (1 - distanceRatio))}, 
      0, 
      ${Math.round(255 * distanceRatio)}
    )`;
      setBluePillColor(newColor);
    }
  };

  return (
    <HomeContainer onMouseMove={handleMouseMove}>
      <ContentWrapper>
        <TextContent>
          {theme === "matrix" ? (
            <>
              <div style={{ textAlign: "center" }}>
                <p>Choose</p>
                <p style={{ textAlign: "justify" }}>
                  Red pill to connect with me!
                  <br />
                  Blue pill to get a gift!
                </p>
              </div>
              <div>
                <PillButton
                  bgColor="red"
                  onClick={() =>
                    handleClick("https://calendar.app.google/tSkdxka8E9aqJaKM6")
                  }
                ></PillButton>
                <PillButton
                  id="bluePill"
                  bgColor={bluePillColor}
                  onClick={() =>
                    handleClick("https://calendar.app.google/tSkdxka8E9aqJaKM6")
                  }
                ></PillButton>
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
  );
}
