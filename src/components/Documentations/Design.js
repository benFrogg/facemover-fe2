import React from "react";
import Popup from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

function Design() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="Design">
      <Button
        onClick={() => setButtonPopup(true)}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        PROJECT DESIGN
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ fontSize: "45px", maxWidth: "500px" }}>
          Link to Project Design Documentation
        </h3>
        <br />
        <a
          href="https://drive.google.com/file/d/1jdD3InsrbZfDlUiTM4Lgo2cIx_KU8Xqm/view?usp=sharing"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          <u>Bring me to see PDF</u>
        </a>
      </Popup>
    </div>
  );
}

export default Design;
