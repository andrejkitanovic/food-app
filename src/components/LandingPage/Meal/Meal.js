import React from "react";
import './Meal.scss'

// import Meal from "../../../assets/LandingPage/Meal.jpg";

const meal = (props) => {
  return (
    <div className="Meal">
      <img src={props.img} alt={props.name} />
      <div className="description">
        <div className="name-and-price">
          <h4>{props.name}</h4>
          <p>${props.price}</p>
        </div>
        <p>{props.description.length > 60 ? props.description.slice(0,60) + "..." : props.description}</p>
      </div>
      <div className="add">
          <button>+</button>
      </div>
    </div>
  );
};

export default meal;
