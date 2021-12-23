import React from 'react';

const Props = (props) =>{
    return(
        <div>
            <h1>My Props{props.ProductName} {props.ProductPrice} {props.ProductImage}</h1>
            <h2>{props.singleproduct}</h2>

        </div>
    )
}
export default Props;