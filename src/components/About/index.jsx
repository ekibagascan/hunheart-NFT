import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Heading,
  Subtitle,
  BottomRight,
} from "./InfoElements";
import hunhea from "../../images/hunhea2medium.png";

const Welcome = ({ CONFIG }) => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <TextWrapper>
            <Heading>{CONFIG.ABOUT_HEADING}</Heading>
            <Subtitle>{CONFIG.ABOUT_SUBTITLE}</Subtitle>
          </TextWrapper>
        </InfoWrapper>
        <BottomRight>
          <img src={hunhea} alt="logohunhea" />
        </BottomRight>
      </InfoContainer>
    </>
  );
};

export default Welcome;
