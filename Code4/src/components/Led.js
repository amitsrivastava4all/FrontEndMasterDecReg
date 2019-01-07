import React from 'react';
export const Leds = (props)=>{
    return (
        <div>
            <h1>Led Component</h1>
            <button onClick={()=>{
                props.history.replace('/clothes');
                }}>Back to Clothes</button>
        </div>
    )
}