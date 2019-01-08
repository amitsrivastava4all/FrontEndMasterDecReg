import React,{Component} from 'react';
import {Nav} from '../components/Nav';
import {Clothes} from '../components/Clothes';
import {Mobile} from '../components/Mobile';
import {Leds} from '../components/Led';
import {Switch,Route} from 'react-router-dom';
export class Shop extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Nav/>
                <fieldset>
        <legend>Output</legend>
        <Switch>
            <Route  path="/home" component = {Mobile}/>
            <Route exact  path="/clothes" component = {Clothes}></Route>
            
            <Route  path="/led" component = {Leds}/>
            <Route  path="/watches/:discount" component = {(props)=>{
                return(
                    <div>
                    <h1>WATCH COMPONENT {props.match.params.discount}</h1>
                   
                    </div>
                )
            }}/>
            <Switch>
           <Route  path ="/clothes/formal" component={()=>{
                    return (
                        <h1>Formal</h1>
                    )
                }}></Route>
                <Route  path ="/clothes/casual" component={()=>{
                    return (
                        <h1>Casual</h1>
                    )
                }}></Route>
                <Route component={()=>{
                return(
                    <h1>404 U Type Some Wrong URL</h1>
                )
                }}></Route>
           </Switch>
            
            
            <Route component={()=>{
                return(
                    <h1>404 U Type Some Wrong URL</h1>
                )
                }}></Route>
        </Switch>
      </fieldset>
            </div>
        )
    }
}