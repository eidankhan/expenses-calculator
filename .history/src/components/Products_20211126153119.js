import React, { useEffect, useState } from 'react'
import { ProductItem } from './ProductItem'

export const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchAllProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    return (
        <div className="container">
        <div className="row">
            {
                products.map((element) => {
                return (
                <div className="col-md-4" key={element.id}>
                    <ProductItem
                    title={element.title}
                    price={element.price}
                    image={element.image}
                    id={element.id}
                    />
                </div>
                );
            })}
        </div>
        </div>
    )
}
