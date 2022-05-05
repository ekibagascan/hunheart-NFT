import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  List,
} from "./InfoElements";

const Howtobuy = ({ imgStart, lightText, darkText, alt, img, CONFIG }) => {
  return (
    <>
      <InfoContainer id="comeandbuy">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading lightText={lightText}>
                  {CONFIG.HOWTOBUY_HEADING}
                </Heading>
                <Subtitle darkText={darkText}>
                  {CONFIG.HOWTOBUY_SUBTITLE}
                  <ol>
                    <List>{CONFIG.HOWTOBUY_LIST_1}</List>
                    <List>{CONFIG.HOWTOBUY_LIST_2}</List>
                    <List>{CONFIG.HOWTOBUY_LIST_3}</List>
                    <List>{CONFIG.HOWTOBUY_LIST_4}</List>
                    <List>{CONFIG.HOWTOBUY_LIST_5}</List>
                    <List>{CONFIG.HOWTOBUY_LIST_6}</List>
                    <List>{CONFIG.HOWTOBUY_LIST_7}</List>
                  </ol>
                </Subtitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Howtobuy;
