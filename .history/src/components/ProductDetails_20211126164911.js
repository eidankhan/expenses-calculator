import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const ProductDetails = (props) => {
  const location = useLocation();
  const id = location.state.id;

  let productItem = null;

  const fetchProductById = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log("Data:"+data.title);
    productItem = data;
    console.log("Product Item:"+productItem.title)
  };
  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div className="my-2">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt=""
          height="300px"
          width="60px"
        />
        <div className="card-body">
          <h5 className="card-title"> Tittle  </h5>
          <p className="card-text"> </p>
        </div>
      </div>
    </div>
  );
};
