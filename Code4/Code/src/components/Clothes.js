import React from 'react';
import {NavLink} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
export const Clothes = ()=>{
    return (
        <div>
            <h1>Clothes Component</h1>
            <ul>
                <li><NavLink to="clothes/formal">Formal Clothes</NavLink></li>
                <li><NavLink to="clothes/casual">Casual Clothes</NavLink></li>
                <br/>
                <hr/>
                
               
                
            </ul>
        </div>
    )
}