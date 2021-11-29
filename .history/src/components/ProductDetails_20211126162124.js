import React from 'react'
import { useLocation } from 'react-router'

export const ProductDetails = (props) => {
    const state = useLocation().state;
    const id = props.location.state.id;
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
