import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";
import demoVid from "../../img/finalDemoVideo.mp4";
import "./Video.css";

function Video() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="Video">
      <Button
        onClick={() => setButtonPopup(true)}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        WATCH DEMO VIDEO
        <i className="far fa-play-circle" />
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Video Demo</h1>
        <video className="demoVid" src={demoVid} controls autoPlay />
      </Popup>
    </div>
  );
}

export default Video;
