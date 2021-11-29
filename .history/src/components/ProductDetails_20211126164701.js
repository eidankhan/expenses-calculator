import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const ProductDetails = (props) => {
  const location = useLocation();
  const id = location.state.id;

  const [productItem, setProductItem] = useState(null);

  const fetchProductById = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = response.json();
    setProductItem(data);
  };
  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div className="my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Tittle  </h5>
          <p className="card-text"> </p>
        </div>
      </div>
    </div>
  );
};
