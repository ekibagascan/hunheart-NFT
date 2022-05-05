import React from "react";
import Welcome from "../../components/Welcome";
import { welcome } from "../../components/Welcome/Data";
import About from "../../components/About";
import Howtobuy from "../../components/Howtobuy";
import { howtobuy } from "../../components/Howtobuy/Data";
import RoadMap from "../../components/Roadmap/index";

const Home = ({ CONFIG }) => {
  return (
    <div id="home">
      <Welcome CONFIG={CONFIG} {...welcome} />
      <About CONFIG={CONFIG} />
      <Howtobuy CONFIG={CONFIG} {...howtobuy} />
      <RoadMap CONFIG={CONFIG} />
    </div>
  );
};

export default Home;
