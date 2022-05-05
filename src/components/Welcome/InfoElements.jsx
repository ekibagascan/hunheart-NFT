import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    margin-top: 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 5;
  height: 860px;
  width: 100%auto;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 94px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-family: "CandyCustom", Verdana, Tahoma;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const SubHeading = styled.h3`
  margin-bottom: 24px;
  margin-top: 20px;
  font-size: 34px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-family: "CandyCustom", Verdana, Tahoma;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    text-align: center;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  font-weight: light;
  font-family: "Sagata", Verdana, Tahoma;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "CandyCustom", Verdana, Tahoma;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const ButtonExplore = styled(Link)`
  border-radius: 50px;
  border: 2px solid transparent;
  background: #ffffff;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#FFFFFF" : "#fff")};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(45deg, white, blue) border-box;
    color: #ffffff;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const ButtonMint = styled(Links)`
  border-radius: 50px;
  border: 2px solid white;
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#000000")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "CandyCustom", Verdana, Tahoma;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(45deg, white, blue) border-box;
    border-color: transparent;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 700px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    background: repeating-linear-gradient(
      white 0%,
      white 7.5px,
      hotpink 7.5px,
      hotpink 15px,
      white 15px,
      white 22.5px,
      hotpink 22.5px,
      hotpink 30px
    );
    transform: translateX(-20%) translateY(-20%) rotate(-45deg);
    animation: animate 20s linear infinite;
  }
`;

export const ImgContent = styled.div`
  position: relative;
  background-color: white;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  text-align: center;
  font-family: sans-serif;
  z-index: 2;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -1;
`;
