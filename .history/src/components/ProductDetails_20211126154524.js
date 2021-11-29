import React from 'react'
import { useLocation } from 'react-router'

export const ProductDetails = (props) => {
    let search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
