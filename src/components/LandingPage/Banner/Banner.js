import React from "react";
import "./Banner.scss";

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
          <button>Order online</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default banner;
