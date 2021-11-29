import React from 'react'
import { useLocation } from 'react-router'

export const ProductDetails = (props) => {
    const location = useLocation();
    const id =  location.state.id;
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
