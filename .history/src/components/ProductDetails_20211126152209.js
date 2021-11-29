import React from 'react'
import { useParams } from 'react-router'

export const ProductDetails = () => {
    let id = useParams();
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
