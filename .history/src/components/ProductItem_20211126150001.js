import React from "react";

export const ProductItem = (props) => {
  return (
    <div className="my-2">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="" height="300px" width="60px"/>
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
          </h5>
          <p className="card-text"> &euro; {props.price} </p>
        </div>
      </div>
    </div>
  );
};
