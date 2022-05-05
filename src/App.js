import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import RoadMapPage from "./Pages/Roadmap/Roadmap";
import Mint from "./Pages/Mint/Mint";
import Footer from "./components/Footer";
import "./index.css";
import { GlobalStyle } from "./globalStyles";

function App() {
  const [CONFIG, SET_CONFIG] = useState({
    MARKETPLACE_LINK: "",
    INSTAGRAM_LINK: "",
    DISCORD_LINK: "",
    TWITTER_LINK: "",
    TELEGRAM_LINK: "",
    FACEBOOK_LINK: "",

    WELCOME_HEADING: "",
    WELCOME_SUBTITLE: "",
    WELCOME_EXPLORE_BUTTON: "",
    WELCOME_MINT_BUTTON: "",
    WELCOME_BOTTOMLINE: "",

    ABOUT_HEADING: "",
    ABOUT_SUBTITLE: "",

    HOWTOBUY_HEADING: "",
    HOWTOBUY_SUBTITLE: "",
    HOWTOBUY_LIST_1: "",
    HOWTOBUY_LIST_2: "",
    HOWTOBUY_LIST_3: "",
    HOWTOBUY_LIST_4: "",
    HOWTOBUY_LIST_5: "",
    HOWTOBUY_LIST_6: "",
    HOWTOBUY_LIST_7: "",

    FIRST_ROADMAP_HEADLINE: "",
    FIRST_ROADMAP_1_HEADING: "",
    FIRST_ROADMAP_1_SUBHEADING: "",
    FIRST_ROADMAP_1_DESCRIPTIONS: "",
    FIRST_ROADMAP_2_HEADING: "",
    FIRST_ROADMAP_2_SUBHEADING: "",
    FIRST_ROADMAP_2_DESCRIPTIONS: "",
    FIRST_ROADMAP_3_HEADING: "",
    FIRST_ROADMAP_3_SUBHEADING: "",
    FIRST_ROADMAP_3_DESCRIPTIONS: "",
    FIRST_ROADMAP_4_HEADING: "",
    FIRST_ROADMAP_4_SUBHEADING: "",
    FIRST_ROADMAP_4_DESCRIPTIONS: "",
    FIRST_ROADMAP_5_HEADING: "",
    FIRST_ROADMAP_5_SUBHEADING: "",
    FIRST_ROADMAP_5_DESCRIPTIONS: "",
    FIRST_ROADMAP_6_HEADING: "",
    FIRST_ROADMAP_6_SUBHEADING: "",
    FIRST_ROADMAP_6_DESCRIPTIONS: "",

    SECOND_ROADMAP_HEADLINE: "",
    SECOND_ROADMAP_1_HEADING: "",
    SECOND_ROADMAP_1_SUBHEADING: "",
    SECOND_ROADMAP_1_DESCRIPTIONS: "",
    SECOND_ROADMAP_2_HEADING: "",
    SECOND_ROADMAP_2_SUBHEADING: "",
    SECOND_ROADMAP_2_DESCRIPTIONS: "",
    SECOND_ROADMAP_3_HEADING: "",
    SECOND_ROADMAP_3_SUBHEADING: "",
    SECOND_ROADMAP_3_DESCRIPTIONS: "",
    SECOND_ROADMAP_4_HEADING: "",
    SECOND_ROADMAP_4_SUBHEADING: "",
    SECOND_ROADMAP_4_DESCRIPTIONS: "",
    SECOND_ROADMAP_5_HEADING: "",
    SECOND_ROADMAP_5_SUBHEADING: "",
    SECOND_ROADMAP_5_DESCRIPTIONS: "",
    SECOND_ROADMAP_6_HEADING: "",
    SECOND_ROADMAP_6_SUBHEADING: "",
    SECOND_ROADMAP_6_DESCRIPTIONS: "",
    SECOND_ROADMAP_7_HEADING: "",
    SECOND_ROADMAP_7_SUBHEADING: "",
    SECOND_ROADMAP_7_DESCRIPTIONS: "",

    THIRD_ROADMAP_HEADLINE: "",
    THIRD_ROADMAP_1_HEADING: "",
    THIRD_ROADMAP_1_SUBHEADING: "",
    THIRD_ROADMAP_1_DESCRIPTIONS: "",
    THIRD_ROADMAP_2_HEADING: "",
    THIRD_ROADMAP_2_SUBHEADING: "",
    THIRD_ROADMAP_2_DESCRIPTIONS: "",
    THIRD_ROADMAP_3_HEADING: "",
    THIRD_ROADMAP_3_SUBHEADING: "",
    THIRD_ROADMAP_3_DESCRIPTIONS: "",
    THIRD_ROADMAP_4_HEADING: "",
    THIRD_ROADMAP_4_SUBHEADING: "",
    THIRD_ROADMAP_4_DESCRIPTIONS: "",
    THIRD_ROADMAP_5_HEADING: "",
    THIRD_ROADMAP_5_SUBHEADING: "",
    THIRD_ROADMAP_5_DESCRIPTIONS: "",
    THIRD_ROADMAP_6_HEADING: "",
    THIRD_ROADMAP_6_SUBHEADING: "",
    THIRD_ROADMAP_6_DESCRIPTIONS: "",

    FOOTER_HEADING: "",
  });

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home CONFIG={CONFIG} />
          <Footer CONFIG={CONFIG} />
        </Route>
        <Route path="/roadmap">
          <RoadMapPage CONFIG={CONFIG} />
          <Footer CONFIG={CONFIG} />
        </Route>
        <Route path="/mint">
          <Mint CONFIG={CONFIG} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
