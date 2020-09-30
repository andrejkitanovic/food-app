import React from "react";
import "./SpecialMenu.scss";

import SpecialMeal from "../SpecialMeal/SpecialMeal";

import mealsData from "../../../data/meals.json";

const specialMenu = (props) => {
  const specialMeals = mealsData.map((meal) => (
    <SpecialMeal
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      img={meal.img}
    />
  ));

  return (
    <div className="SpecialMenu" id="special">
      <h3>Our weekly specials menu</h3>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book
      </p>

      <div className="meals">{specialMeals}</div>
    </div>
  );
};

export default specialMenu;
