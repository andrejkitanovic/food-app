import React from "react";
import './SpecialMeal.scss'

const specialMeal = (props) => {
  return (
    <div className="SpecialMeal">
      <img src={props.img} alt={props.name} />
      <div className="description">
        <div className="name-and-price">
          <h4>{props.name}</h4>
          <p>${props.price}</p>
        </div>
        <p>{props.description.length > 60 ? props.description.slice(0,60) + "..." : props.description}</p>
      </div>
    </div>
  );
};

export default specialMeal;
