import React from "react";
import { HeroContainer, HeroContent, HeroBg, ImageBg } from "./HeroElements";

import bg from "../../images/grafiti.jpg";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <ImageBg src={bg} alt="bg" />
      </HeroBg>
      <HeroContent></HeroContent>
    </HeroContainer>
  );
};

export default Hero;
