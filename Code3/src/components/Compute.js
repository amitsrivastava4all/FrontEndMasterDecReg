import React from 'react';
export const Compute = (props)=>{
return (
    <div>
    <button onClick={props.add}>+</button>
            <button onClick={props.sub}>-</button>
            <button>*</button>
            <button>/</button>
    </div>
)
}