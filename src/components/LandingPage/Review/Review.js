import React from "react";
import "./Review.scss";

import { ImQuotesRight } from "react-icons/im";

const review = (props) => {
  return (
    <div className="Review">
      <div className="content">
        <div className="img">
          <img src={props.img} alt={props.name} />
        </div>
        <p>{props.text}</p>
        <ImQuotesRight />
        <p className="name">{props.name}</p>
      </div>
    </div>
  );
};

export default review;
