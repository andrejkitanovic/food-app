import React from "react";
import "./Banner.scss";

// import {Link} from 'react-router-dom'

const banner = (props) => {
  return (
    <div className="Banner"  id="home">
      <div className="description">
        <h1>Restaurant</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
        </p>
        <div className="buttons">
          <a href="#order">Order online</a>
          <a href="#about">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default banner;
