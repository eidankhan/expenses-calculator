import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const ProductDetails = (props) => {
  const location = useLocation();
  const id = location.state.id;

  let productItem = null;

  const fetchProductById = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    productItem = data;
  };
  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div className="my-2">
      <div className="card">
        <img
          src={productItem.image}
          className="card-img-top"
          alt=""
          height="300px"
          width="60px"
        />
        <div className="card-body">
          <h5 className="card-title"> {productItem.title}  </h5>
          <p className="card-text"> {productItem.price} </p>
        </div>
      </div>
    </div>
  );
};
