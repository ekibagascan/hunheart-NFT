import React from "react";
import styled from "styled-components";
import NavbarTwo from "../../components/NavbarTwo";
import RoadOne from "./RoadOne";
import RoadTwo from "./RoadTwo";
import RoadThree from "./RoadThree";

const Divider = styled.div`
  margin-top: 200px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const RoadMapPage = ({CONFIG}) => {
  return (
    <>
      <NavbarTwo />
      <RoadOne CONFIG={CONFIG}/>
      <RoadTwo CONFIG={CONFIG}/>
      <Divider />
      <RoadThree CONFIG={CONFIG}/>
    </>
  );
};

export default RoadMapPage;
