import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const InfoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%auto;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 120vh;
  }
`;

const InfoRoad = styled.div`
  display: flex;
  margin: auto;
  height: 860px;
  width: 100%auto;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    flex-direction: column;
    grid-template-areas: "col1" "col2";
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #f7f8fa;
  font-family: "CandyCustom", Verdana, Tahoma;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Subheading = styled.h2`
  margin-bottom: 24px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600px;
  color: #f7f8fa;
  font-family: "CandyCustom", Verdana, Tahoma;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  align-self: end;
  font-family: "Sagata", Verdana, Tahoma;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const ButtonExplore = styled(Link)`
  border-radius: 50px;
  border: 2px solid transparent;
  background: #ffffff;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "20px 30px")};
  color: ${({ dark }) => (dark ? "#FFFFFF" : "#fff")};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "20px")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 60px;
  font-family: "CandyCustom", Verdana, Tahoma;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(45deg, white, blue) border-box;
    color: #ffffff;
  }
  @media screen and (max-width: 574px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const Col2Grid = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 60px;
  @media screen and (max-width: 574px) {
    margin: 20px;
  }
`;

const RoadMap = ({ CONFIG }) => {
  return (
    <InfoContainer id="roadmap">
      <InfoWrapper>
        <InfoRoad>
          <Column1>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.FIRST_ROADMAP_1_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.FIRST_ROADMAP_1_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.FIRST_ROADMAP_1_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.FIRST_ROADMAP_2_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.FIRST_ROADMAP_2_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.FIRST_ROADMAP_2_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Heading>{CONFIG.FIRST_ROADMAP_3_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "50px",
                }}
              >
                <Subheading>{CONFIG.FIRST_ROADMAP_3_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.FIRST_ROADMAP_3_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Grid>
          </Column1>
          <Column2>
            <Col2Grid>
              <Heading>{CONFIG.FIRST_ROADMAP_4_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "54px",
                }}
              >
                <Subheading>{CONFIG.FIRST_ROADMAP_4_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.FIRST_ROADMAP_4_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Col2Grid>
            <Col2Grid>
              <Heading>{CONFIG.FIRST_ROADMAP_5_HEADING}</Heading>
              <Grid
                style={{
                  display: "block",
                  textAlign: "left",
                  maxWidth: "285px",
                  marginLeft: "54px",
                }}
              >
                <Subheading>{CONFIG.FIRST_ROADMAP_5_SUBHEADING}</Subheading>
                <Subtitle>{CONFIG.FIRST_ROADMAP_5_DESCRIPTIONS}</Subtitle>
              </Grid>
            </Col2Grid>
            <Grid
              style={{
                alignItems: "center",
                margin: "60px",
                maxWidth: "340px",
              }}
            >
              <ButtonExplore to="/roadmap">Learn More</ButtonExplore>
            </Grid>
          </Column2>
        </InfoRoad>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default RoadMap;
