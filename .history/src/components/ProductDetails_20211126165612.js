import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const ProductDetails = (props) => {
  const location = useLocation();
  const id = location.state.id;

  const [productItem, setProductItem] = useState({})

  const fetchProductById = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProductItem(data);
    console.log("Image"+ productItem.title)
  };
  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div className=" container my-2" style={{height:"500px"}}>
      <div className="card">
        <img
          src={productItem.image}
          className="card-img-top"
          alt=""
          height="300px"
        />
        <div className="card-body">
          <h5 className="card-title"> {productItem.title}  </h5>
          <p className="card-text"> </p>
        </div>
      </div>
    </div>
  );
};
