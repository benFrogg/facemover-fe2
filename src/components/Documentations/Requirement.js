import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function Requirement() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="Requirements">
      <Button
        onClick={() => setButtonPopup(true)}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        PROJECT REQUIREMENT
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ fontSize: "45px", maxWidth: "500px" }}>
          Link to Project Requirement Documentation
        </h3>
        <br />
        <a
          href="https://drive.google.com/file/d/12dNO0gwSC-BYU_rKxOUuPN-F77r3hPmU/view?usp=sharing"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          <u>Bring me to see PDF</u>
        </a>
      </Popup>
    </div>
  );
}

export default Requirement;
