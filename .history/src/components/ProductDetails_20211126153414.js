import React from 'react'

export const ProductDetails = (props) => {
    let id = props.match.params.id
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
