import React from "react";
import './Header.scss'

import Navigation from "../Navigation/Navigation";

const header = (props) => {


  return <header>
      <div className="logo">
          FoodApp+
      </div>
      <Navigation />
  </header>;
};

export default header;
