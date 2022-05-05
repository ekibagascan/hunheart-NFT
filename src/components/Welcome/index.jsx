import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  SubHeading,
  Subtitle,
  BtnWrap,
  ButtonExplore,
  ButtonMint,
  Img,
  HeroBg,
  VideoBg,
} from "./InfoElements";
import Video from "../../video/candy.mp4";
import "./index.css";

const Welcome = ({
  lightBg,
  imgStart,
  lightText,
  darkText,
  alt,
  img,
  primary,
  dark,
  dark2,
  CONFIG,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id="about">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>
                  {CONFIG.WELCOME_HEADING}
                </Heading>
                <Subtitle darkText={darkText}>
                  {CONFIG.WELCOME_SUBTITLE}
                </Subtitle>
                <BtnWrap>
                  <ButtonExplore
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {CONFIG.WELCOME_EXPLORE_BUTTON}
                  </ButtonExplore>
                  <ButtonMint
                    to="/mint"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    style={{ marginLeft: "20px" }}
                  >
                    {CONFIG.WELCOME_MINT_BUTTON}
                  </ButtonMint>
                </BtnWrap>
                <SubHeading lightText={lightText}>Mint active!</SubHeading>
              </TextWrapper>
            </Column1>
            <Column2>
              <div class="box">
                <div class="content">
                  <Img src={img} alt={alt} />
                </div>
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Welcome;
