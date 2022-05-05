import styled from "styled-components";
import { Link } from "react-scroll";

export const InfoContainer = styled.div`
  color: #fff;
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
  @media screen and (max-width: 480px) {
    height: 900px;
  }
`;
export const Column1 = styled.div`
  padding: 0 20px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  padding: 0 20px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  max-width: 700px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-family: "CandyCustom", Verdana, Tahoma;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: light;
  line-height: 1.5;
  font-family: "Sagata", Verdana, Tahoma;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "CandyCustom", Verdana, Tahoma;
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
`;
export const ButtonMint = styled.button`
  border-radius: 50px;
  border: 2px solid white;
  background: transparent;
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
    border-color: #000000;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 700px;
`;

export const Img = styled.img`
  width: 90%;
  margin: 0 0 10px 0;
  padding-right: 0;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const List = styled.li`
  margin: 6px 0;
`;
