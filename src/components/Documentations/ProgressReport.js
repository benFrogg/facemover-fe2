import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function ProgressReport() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="ProgressReport">
      <Button
        onClick={() => setButtonPopup(true)}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        PROGRESS REPORT
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ fontSize: "45px", maxWidth: "500px" }}>
          Link to Mid Term Progress Report Documentation
        </h3>
        <br />
        <a
          href="https://drive.google.com/file/d/1EEAGpOfNGCO-gJmbgj6SClu8dyfH46Hr/view?usp=sharing"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          <u>Bring me to see PDF</u>
        </a>
      </Popup>
    </div>
  );
}

export default ProgressReport;
