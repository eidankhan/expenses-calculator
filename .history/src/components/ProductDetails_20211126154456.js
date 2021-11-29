import React from 'react'
import { useLocation } from 'react-router'

export const ProductDetails = (props) => {
    let search = useLocation().search;
    const id = URLSearchParams(search).get("id");
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
