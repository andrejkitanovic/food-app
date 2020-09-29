import React from "react";
import './Navigation.scss'

// import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <div className="Navigation">
      <a href="#home">Home</a>
      <a href="#about">About us</a>
      <a href="#menu">Menu</a>
      <a href="#special">House Special</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>
      <a href="#cart">Cart</a>
    </div>
  );
};

export default navigation;
