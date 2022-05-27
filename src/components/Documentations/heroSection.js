import React from "react";
import { Button } from "./Button";
import "../../App.css";
import "./heroSection.css";
import Proposal from "./Proposal";
import Requirement from "./Requirement";
import Design from "./Design";
import Progress from "./ProgressReport";
import UserGuide from "./UserGuide";
import Video from "./Video";

function heroSection() {
  return (
    <div className="hero-bg">
      <div className="hero-container" id="hero">
        <video src={console.log("test")} autoPlay loop muted />
        <h1>FaceMover Pte Ltd</h1>
        <p>Animating the image of your choice</p>
        <div className="hero-btns">
          <UserGuide />
        </div>
        <div className="hero-btns">
          <Video />
        </div>
        <div className="hero-btns">
          <Proposal />
        </div>
        <div className="hero-btns">
          <Requirement />
        </div>
        <div className="hero-btns">
          <Design />
        </div>
        <div className="hero-btns">
          <Progress />
        </div>
      </div>
    </div>
  );
}

export default heroSection;
