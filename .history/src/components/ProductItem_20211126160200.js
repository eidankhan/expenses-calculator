import React from "react";
import { useNavigate } from "react-router";


export const ProductItem = (props) => {
  let navigate = useNavigate();
  const handleOnClick = (id) => {
      navigate("/products/:id");
  }

  return (
    <div className="my-2">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="" height="300px" width="60px"/>
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
          </h5>
          <p className="card-text"> &euro; {props.price} </p>
          <button className="btn btn-sm btn-dark" onClick={handleOnClick(props.id)}> Read More </button>
        </div>
      </div>
    </div>
  );
};
