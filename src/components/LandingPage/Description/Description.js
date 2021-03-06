import React from "react";
import "./Description.scss";

import Dish from "../../../assets/LandingPage/Dish.png";

const description = (props) => {
  return (
    <div className="Description">
      <div className="gradient">
        <img src={Dish} alt="Healthy Dish" />
      </div>

      <div className="text">
        <h3>The tradition & work of our restaurant</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default description;
