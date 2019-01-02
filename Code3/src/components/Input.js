import React from 'react';
export const Input=(props)=>{
    return (
        <div>
            <h2>Calc Demo (Parent - Child)</h2>
            <input onChange={props.takeFirstValue} placeholder="Type First Number" type="text"/>
            <br/>
            <input onChange={props.takeSecondValue} placeholder="Type Second Number" type="text"/>
            <br/>
            
        </div>
    )

}