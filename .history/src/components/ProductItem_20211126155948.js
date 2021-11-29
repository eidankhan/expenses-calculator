import React from "react";


export const ProductItem = (props) => {

  const handleOnClick = (id) => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState("/products/:id", {id});
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
