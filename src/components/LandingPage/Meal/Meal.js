import React from "react";
import './Meal.scss'

import Meal from "../../../assets/LandingPage/Meal.jpg";

const meal = (props) => {
  return (
    <div className="Meal">
      <img src={Meal} alt="Meal" />
      <div className="description">
        <div className="name-and-price">
          <h4>Mixed Burger</h4>
          <p>$12</p>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="add">
          <button>+</button>
      </div>
    </div>
  );
};

export default meal;
