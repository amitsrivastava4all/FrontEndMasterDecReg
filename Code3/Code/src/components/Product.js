import React from 'react';
export const Product = (props)=>{
    return(
        <div>
            <img src={props.product.url} alt=""/>
            <p>Name : {props.product.name}</p>
            <p>Price : {props.product.price}</p>
           <hr/>   
        </div>
    )
}