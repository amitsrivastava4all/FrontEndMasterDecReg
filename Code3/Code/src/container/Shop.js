import React, { Component } from 'react'
import {ajax} from '../utils/Ajax';
import {List} from '../components/List';
export class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {items:[]};
    }
    fillItemState(itemsArray){
        console.log("Item Array ",itemsArray, "This is ",this);
        this.setState({items:itemsArray},()=>{
            console.log("I am Done...");
        });
        console.log("After State Set ",this.state.items);
    }
    componentWillMount(){
        this.callAjax();
        console.log(" Component Will Mount...");
    }
    // componentDidMount(){
       
    //     console.log("After Component Did Mount...");
    // }
    callAjax(){
       // ajax(this.fillItemState.bind(this));
    }
    render(){
        return (
                <List items={this.state.items}/>
        );
    }
}