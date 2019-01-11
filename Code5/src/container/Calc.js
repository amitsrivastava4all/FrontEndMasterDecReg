import React from 'react';
import { Input } from '../components/Input';
import  Output  from '../components/Output';
import {storeObject} from '../model/store';
export class Calc extends React.Component{
    constructor(props){
        super(props);
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.state = {};
    }
    operations(opr){
        console.log("Operation is ",opr);
        if(opr=='+'){
        storeObject.dispatch({type:'ADD',payload:{first:this.firstNumber,second:this.secondNumber}});
        }
        else
        if(opr=='-'){
            storeObject.dispatch({type:'SUBTRACT',payload:{first:this.firstNumber,second:this.secondNumber}});  
        }    
    }
    takeFirstNumber(event){
        this.firstNumber = event.target.value;
        console.log("First ",this.firstNumber);
    }
    takeSecondNumber(event){
        this.secondNumber = event.target.value;
        console.log("Second ",this.secondNumber);
    }
    render(){
        return (
            <div>
                <h1>Calc with Redux</h1>
                <Input operations={this.operations.bind(this)} first= {this.takeFirstNumber.bind(this)} second={this.takeSecondNumber.bind(this)}/>
                <Output/>
            </div>
        )
}
}