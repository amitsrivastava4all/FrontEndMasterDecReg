import React, { Component } from 'react'
import {ajax} from '../utils/Ajax';
import {List} from '../components/List';
import { ItemOperations } from '../models/itemOperations';
export class Shop extends Component{
    constructor(props){
        super(props);
        this.time = 10;
        this.state = {items:[],count:0};
        this.itemArray = [];
    }
    addToCartClick(currentId){
        console.log("Shop Rec Event Add to Cart ",currentId);
        ItemOperations.addToCart(currentId);
        this.setState({...this.state,count:ItemOperations.countItemsInCart()})
    
    }
    message(){
        if(this.time<12 && this.time>=5){
            return (<h1>Good Morning User....</h1>)
        }
        else
        if(this.time>=12 && this.time<=4){
            return (<h1>Good After Noon User....</h1>);
        }
        return (<h1>Good Evening User....</h1>);
    }
    fillItemState(itemsArray){
        this.itemArray = itemsArray;
        console.log("Item Array ",itemsArray, "This is ",this);
        this.setState({items:this.itemArray},()=>{
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
        ajax(this.fillItemState.bind(this));
    }
    render(){
        var m = (<h1>Good Evening User</h1>);
        if(this.time<12 && this.time>=5){
            m=  (<h1>Good Morning User</h1>)
        }
        else
        if(this.time>=12 && this.time<=4){
            m= (<h1>Good After Noon User</h1>);
        }
        else{
        m=  (<h1>Good Evening User</h1>);
        }
        return (
                <div>
                    Calling {this.message()}
                    <hr/>
                    {m}
                    <p>Items in Cart {this.state.count}</p>
                    <List addtoCart= {this.addToCartClick.bind(this)} items={this.state.items}/>
                </div>
               
        );
    }
}