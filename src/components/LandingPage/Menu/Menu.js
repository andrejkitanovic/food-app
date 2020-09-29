import React from "react";
import "./Menu.scss";

import Meal from "../Meal/Meal";

import categoriesData from "../../../data/category.json";
import mealsData from "../../../data/meals.json"

const menu = (props) => {
  const categories = categoriesData.map((category) => (
    <button key={category.id}>{category.name}</button>
  ));

  const meals = mealsData.map(meal => <Meal key={meal.id} name={meal.name} price={meal.price} description={meal.description} img={meal.img}/>)

  return (
    <div className="Menu" id="menu">
      <h3>Explore our menu</h3>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley
      </p>

      <div className="categories">
        <button className="active">All foods</button>
        {categories}
      </div>

      <div className="meals">
       {meals}
      </div>
    </div>
  );
};

export default menu;
