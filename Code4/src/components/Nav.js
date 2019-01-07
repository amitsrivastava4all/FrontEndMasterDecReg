import React from 'react';
import {NavLink} from 'react-router-dom';
export const Nav =(props)=>{
    return (
        <nav>
                    <ul>
                        <li><NavLink activeClassName="active" to="/home" >Mobile</NavLink></li>
                        <li><NavLink to="/clothes" >Clothes</NavLink></li>
                        <li><NavLink to="/watches/1000" >Watches</NavLink></li>
                        <li><NavLink to="/led" >Led</NavLink></li>
                    </ul>
                </nav>
    )
}