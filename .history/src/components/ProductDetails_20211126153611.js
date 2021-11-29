import React from 'react'

export const ProductDetails = (props) => {
    let query = URLSearchParams(props.location.search);
    const id = query.get("id");
    return (
        <div>
            Product Details with Id {id}
        </div>
    )
}
