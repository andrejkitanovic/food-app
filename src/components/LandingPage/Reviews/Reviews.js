import React from "react";
import "./Reviews.scss";

import { CSSTransition } from "react-transition-group";

import Review from "../Review/Review";

import reviewData from "../../../data/reviews.json";

let transition = "review"

const reviews = (props) => {
  const reviews = reviewData.map((review, index) => (
    <CSSTransition
      in={props.active === index + 1}
      timeout={500}
      classNames={transition}
      mountOnEnter
      unmountOnExit
      key={index}
    >
      <Review name={review.name} text={review.text} img={review.img} />
    </CSSTransition>
  ));

  const leftHandler = () => {
      if(transition === "reverse"){
          transition = "review"
      }
    props.click(props.active > 1 ? props.active - 1 : reviews.length)
  }

  const rightHandler = () => {
    if(transition === "review"){
        transition = "reverse"
    }
    props.click(props.active === reviews.length ? 1 : props.active + 1)
  }

  return (
    <div className="Reviews" id="reviews">
      <h3>Our customer reviews</h3>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled
      </p>
      <div className="review-holder">{reviews}</div>
      <button className="arrow-left" onClick={leftHandler}></button>
      <button className="arrow-right" onClick={rightHandler}></button>
    </div>
  );
};

export default reviews;
