import React from "react";
import "./Cards.scss";

import {HiThumbUp , HiShoppingCart , HiClock} from 'react-icons/hi'

const cards = (props) => {
  return (
    <div className="Cards">
      <div className="card-container">
        <div className={"card" + (props.active === 1 ? " active" : "")} onClick={() => props.click(1)}>
          <div className="icon"><HiThumbUp/></div>
          <h4>Healthy meals</h4>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
        </div>

        <div className={"card" + (props.active === 2 ? " active" : "")} onClick={() => props.click(2)}>
          <div className="icon"><HiShoppingCart/></div>
          <h4>Online shopping</h4>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
        </div>

        <div className={"card" + (props.active === 3 ? " active" : "")} onClick={() => props.click(3)}>
          <div className="icon"><HiClock/></div>
          <h4>Fast service</h4>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
        </div>
      </div>
      <div className="pagination">
          <div className={"bullet" + (props.active === 1 ? " active" : "")} onClick={() => props.click(1)}></div>
          <div className={"bullet" + (props.active === 2 ? " active" : "")} onClick={() => props.click(2)}></div>
          <div className={"bullet" + (props.active === 3 ? " active" : "")} onClick={() => props.click(3)}></div>
      </div>
    </div>
  );
};

export default cards;
