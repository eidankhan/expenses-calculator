import React from 'react'
import { useLocation } from 'react-router'

export const ProductDetails = (props) => {
    const location = useLocation();
    console.log("Location:"+location)
    return (
        <div>
            Product Details with Id 
        </div>
    )
}
