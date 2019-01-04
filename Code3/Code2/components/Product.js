import React from 'react';
import './Product.css';
export const Product = (props)=>{
    return(
        <div>
            <img src={props.product.url} alt=""/>
            <p>Name : {props.product.name}</p>
            <p>Price : {props.product.price}</p>
            <button onClick={()=>{
                console.log("Product Clicked ",props.product.id);
                props.addtoCart(props.product.id);
                }}>Add to Cart</button>
           <hr/>   
        </div>
    )
}