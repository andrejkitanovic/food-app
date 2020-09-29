import React from "react";
import "./Menu.scss";

import Meal from '../Meal/Meal'

const menu = (props) => {
  return (
    <div className="Menu">
      <h3>Explore our menu</h3>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley
      </p>

      <div className="categories">
          <button className="active">All foods</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Desert</button>
          <button>Soups</button>
          <button>Drinks</button>
      </div>

      <div className="meals">
        <Meal />
        <Meal />
        <Meal />

        <Meal />
        <Meal />
        <Meal />
      </div>
    </div>
  );
};

export default menu;
