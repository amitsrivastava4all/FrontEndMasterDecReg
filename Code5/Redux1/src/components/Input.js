import React from 'react';
export const Input = (props)=>{
    return(
        <div>
        <input type='text' onChange={props.first} placeholder='Type First Number'/>
        <br/>
        <input type='text' onChange={props.second} placeholder="Type Second Number"/>
        <br/>
        <button onClick={()=>{
            props.operations('+');
            }}>+</button>
        <button onClick={()=>{
            props.operations('-');
            }}>-</button>
        </div>
    )
}