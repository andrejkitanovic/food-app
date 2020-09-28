import React from "react";
import './Navigation.scss'

import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <div className="Navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About us</NavLink>
      <NavLink to="/">Menu</NavLink>
      <NavLink to="/">House Special</NavLink>
      <NavLink to="/">Reviews</NavLink>
      <NavLink to="/">Contact</NavLink>
      <NavLink to="/">Book a seat</NavLink>
    </div>
  );
};

export default navigation;
