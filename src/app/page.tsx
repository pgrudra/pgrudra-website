"use client";

import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); // Adjust based on your header height
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContent = styled.div`
  margin-right: 20px;
`;

const ImageWrapper = styled.div`
  margin-right: 20px;
`;

const NameWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const PillButton = styled.button<{ color: "red" | "blue" }>`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 10px;
`;

const ConnectButton = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Home() {
  const [theme, setTheme] = useState<"matrix" | "bright">("matrix");

  const handlePillClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <HomeContainer>
      <ContentWrapper>
        <LeftContent>
          {theme === "matrix" ? (
            <>
              <p>Choose Red pill to connect with me! Blue pill to get a gift</p>
              <PillButton
                color="red"
                onClick={() =>
                  handlePillClick(
                    "https://calendar.app.google/tSkdxka8E9aqJaKM6"
                  )
                }
              >
                Red Pill
              </PillButton>
              <PillButton
                color="blue"
                onClick={() =>
                  handlePillClick(
                    "https://calendar.app.google/tSkdxka8E9aqJaKM6"
                  )
                }
              >
                Blue Pill
              </PillButton>
            </>
          ) : (
            <>
              <p>Connect With Me</p>
              <ConnectButton
                onClick={() =>
                  handlePillClick(
                    "https://calendar.app.google/tSkdxka8E9aqJaKM6"
                  )
                }
              >
                Connect
              </ConnectButton>
            </>
          )}
        </LeftContent>
        <ImageWrapper>
          <Image
            src="/my-photo-matrix.jpg"
            alt="Prajwal Rudrakshi's Image"
            width={100}
            height={100}
          />
        </ImageWrapper>
        <NameWrapper>Prajwal Rudrakshi</NameWrapper>
      </ContentWrapper>
    </HomeContainer>
  );
}
