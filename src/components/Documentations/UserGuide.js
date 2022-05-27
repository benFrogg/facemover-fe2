import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function UserGuide() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="UserGuide">
      <Button
        onClick={() => setButtonPopup(true)}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        USER MANUAL
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ fontSize: "45px", maxWidth: "500px" }}>
          Link to User Manual
        </h3>
        <br />
        <a
          href="https://drive.google.com/file/d/1tCM_YPwdUXqLfIqGk66BXdvPvHrDFQ-w/view?usp=sharing"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          <u>Bring me to see PDF</u>
        </a>
      </Popup>
    </div>
  );
}

export default UserGuide;
