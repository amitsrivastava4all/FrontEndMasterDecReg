import React from 'react';
import {Product} from './Product'
export const List = (props)=>{
    console.log("Props ",props.items);
    var jsx = (<h1>No Record Found</h1>);
   
    return(
        <div>
            {props.items && props.items.length>0?props.items.map(item=><Product addtoCart={(currentId)=>{
                console.log("List Rec ",currentId);
                props.addtoCart(currentId);
                }} key={item.id} product={item}/>):jsx}
        </div>
    );
}