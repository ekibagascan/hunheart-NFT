import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%auto;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
  margin: auto;
  border-radius: 20px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  @media screen and (max-width: 480px) {
    padding-top: 50px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
  line-height: 1.1;
  text-align: center;
  color: #f7f8fa;
  font-family: "CandyCustom", Verdana, Tahoma;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: light;
  line-height: 1.6;
  font-family: "Sagata", Verdana, Tahoma;
  color: #f7f8fa;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: -10px;
  right: 308px;
  font-size: 18px;
  z-index: 1;
  @media screen and (max-width: 480px) {
    right: 0px;
  }
`;
