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
        <div className="my-3">
            <ProductItem  products={products}/>
        </div>
    )
}
