import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import FaceEx from "../../img/facial_expression.jpg";
import EyeMov from "../../img/eye_movement.jpg";
import GendCust from "../../img/gender_customization.jpg";
import FaceAge from "../../img/face_aging.jpg";
import AnimeStyle from "../../img/anime_style.jpg";
import ProdAudio from "../../img/producing_audio.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>All features</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src={FaceEx}
              text="Facial Expression"
              label="FE"
              path="/animator"
            />
            <CardItem
              src={EyeMov}
              text="Eye Movement"
              label="EM"
              path="/animator"
            />

            <CardItem
              src={GendCust}
              text="Gender Customization"
              label="GC"
              path="/animator"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src={FaceAge}
              text="Face Aging"
              label="FA"
              path="/animator"
            />
            <CardItem
              src={AnimeStyle}
              text="Anime-Style Image"
              label="AS"
              path="/animator"
            />
            <CardItem
              src={ProdAudio}
              text="Produce Audio"
              label="PS"
              path="/animator"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
