import React from "react";

export const ProductItem = (props) => {
  return (
    <div className="my-2">
      <div className="card" style={{height:"200px"}}>
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
          </h5>
          <p className="card-text">$ {props.price} </p>
        </div>
      </div>
    </div>
  );
};
