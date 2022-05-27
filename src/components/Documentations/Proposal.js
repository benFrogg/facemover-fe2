import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function Proposal() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="Proposal">
      <Button
        onClick={() => setButtonPopup(true)}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        PROJECT PROPOSAL
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ fontSize: "45px", maxWidth: "500px" }}>
          Link to Project Proposal Documentation
        </h3>
        <br />
        <a
          href="https://drive.google.com/file/d/1yqz7WVynmSsmXCy_KOWPMXtMjOyH-q4R/view?usp=sharing"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          <u>Bring me to see PDF</u>
        </a>
      </Popup>
    </div>
  );
}

export default Proposal;
