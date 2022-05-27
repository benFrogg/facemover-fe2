import React from "react";
import "./Animator.css";
import ImageAndFeature from "./ImageAndFeature";

function Animator() {
  return (
    <div
      id="animator"
      className="AnimatorFrame"
      style={{ backgroundColor: "rgb(28, 27, 27)", color: "white" }}
    >
      <h1>Animator</h1>
      <ImageAndFeature />
    </div>
  );
}

export default Animator;
